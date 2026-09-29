const express = require("express");
const router = express.Router();
const { Horoscope, validate } = require("../models/horoscope");
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

router.post("/", async (req, res) => {
  if (!req.body) return res.status(400).send({ error: "Body not provided" });

  const { error } = validate(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  try {
    const horoscope = new Horoscope(req.body);
    await horoscope.save();
    res.status(201).send({ message: "Horoscope details saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal server error" });
  }
});

// POST /horoscope/predict - Generates Sinhala horoscope prediction using Gemini AI
router.post("/predict", async (req, res) => {
  if (!req.body) return res.status(400).send({ error: "Body not provided" });

  const { error } = validate(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  const { name, gender, birthDate, birthTime, birthDistrict } = req.body;

  const prompt = `
You are an expert astrologer. Based on the following birth details, calculate the user's Zodiac sign (Rashi) and provide a comprehensive daily horoscope and life prediction in Sinhala (සිංහල).

User Details:
- Name: ${name}
- Gender: ${gender || "Not specified"}
- Birth Date: ${birthDate}
- Birth Time: ${birthTime}
- Birth District: ${birthDistrict}

Output Format Guidelines:
1. Identify the Zodiac Sign (ලග්නය / රාශිය) based on the birth details.
2. Provide key predictions covering:
   - Personality traits (පුද්ගලිකත්වය)
   - Career & Education (රැකියාව සහ අධ්‍යාපනය)
   - Health (සෞඛ්‍යය)
   - Lucky colors, numbers, or days (සුබ වර්ණ සහ අංක)
3. Ensure the complete response is written in polite, clear, and natural Sinhala text.
`;

  try {
    let response;

    // Primary attempt with gemini-3.8-flash, falling back to gemini-3.5-flash-lite on 503 load spikes
    try {
      response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
      });
    } catch (primaryErr) {
      if (primaryErr.status === 503 || primaryErr.code === 503) {
        console.warn("gemini-3.8-flash busy, falling back to gemini-3.5-flash-lite...");
        response = await ai.models.generateContent({
          model: "gemini-3.5-flash-lite",
          contents: prompt,
        });
      } else {
        throw primaryErr;
      }
    }

    res.status(200).send({
      message: "Horoscope prediction generated successfully",
      prediction: response.text,
    });
  } catch (err) {
    console.error("Gemini API Error:", err);

    if (err.status === 503 || err.code === 503) {
      return res.status(503).send({
        error:
          "AI service is currently experiencing high demand. Please try again in a few seconds.",
      });
    }

    res.status(500).send({ error: "Failed to generate horoscope prediction" });
  }
});

module.exports = router;
