const express = require("express");
const router = express.Router();
const { Review, validate } = require("../models/review");

router.post("/", async (req, res) => {
  if (!req.body) return res.status(400).send({ error: "Body not provided" });

  const { error } = validate(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).send(review);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
