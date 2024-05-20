const express = require("express");
const router = express.Router();
const { Horoscope, validate } = require("../models/horoscope");

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  try {
    const horoscope = new Horoscope(req.body);
    await horoscope.save();
    res.status(201).send(horoscope);
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
});

module.exports = router;
