const express = require("express");
const router = express.Router();
const { Review, validate } = require("../models/review");

router.get("/:count", async (req, res) => {
  const { count } = req.params;
  if (!count) return res.status(400).send({ error: "No count provided" });

  const MAX_COUNT = 100;
  if (isNaN(count) || count < 0 || count > MAX_COUNT)
    return res.status(400).send({ error: "Invalid count" });

  try {
    const reviews = await Review.find()
      .sort({ rating: -1 })
      .limit(count)
      .select("-_id");
    res.status(200).send(reviews);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

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
