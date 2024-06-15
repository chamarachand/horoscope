const express = require("express");
const router = express.Router();
const { Review, validate } = require("../models/review");

// Get accepted reviews
router.get("/count/:count", async (req, res) => {
  const MAX_COUNT = 100;
  const { count } = req.params;

  if (isNaN(count) || count < 0 || count > MAX_COUNT)
    return res.status(400).send({ error: "Invalid count" });

  try {
    const reviews = await Review.find({ accepted: true })
      .sort({ rating: -1 })
      .limit(count)
      .select("-_id");
    res.status(200).send(reviews);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

// Get pending reviews (not accepted)
router.get("/pending", async (req, res) => {
  try {
    const reviews = await Review.find({ accepted: false });
    return res.status(200).send(reviews);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Internal server error" });
  }
});

// Create a review
router.post("/", async (req, res) => {
  if (!req.body) return res.status(400).send({ error: "Body not provided" });

  const { error } = validate(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).send({ message: "Review saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
