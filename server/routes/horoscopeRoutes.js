const express = require("express");
const router = express.Router();
const { Horoscope, validate } = require("../models/horoscope");

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

module.exports = router;
