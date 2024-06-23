const express = require("express");
const router = express.Router();
const { Review, validate } = require("../models/review");
const { default: mongoose } = require("mongoose");

// Get accepted reviews
router.get("/count/:count", async (req, res) => {
  const MAX_COUNT = 100;
  const { count } = req.params;

  if (isNaN(count) || count < 0 || count > MAX_COUNT)
    return res.status(400).send({ error: "Invalid count" });

  try {
    const reviews = await Review.find({ reviewed: true, accepted: true })
      .sort({ rating: -1 })
      .limit(count)
      .select("-_id");
    res.status(200).send(reviews);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

// Get pending reviews (not reviewed)
router.get("/pending", async (req, res) => {
  try {
    const reviews = await Review.find({ reviewed: false });
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

// Accept review
router.patch("/accept/id/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).send({ error: "Invalid review id" });

  try {
    const review = await Review.findByIdAndUpdate(
      id,
      {
        reviewed: true,
        accepted: true,
      },
      { new: true }
    );

    if (!review)
      return res
        .status(400)
        .send({ error: "Review with the given id not found" });

    res.status(200).send({ message: "Review accepted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

// Reject a review
router.patch("/reject/id/:id", async (req, res) => {
  const { id } = req.params;
  const { reason } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).send({ error: "Invalid review id" });

  if (!reason) return res.status(400).send({ error: "Reason not provided" });

  if (reason.length < 5 || reason.length > 1024)
    return res.status(400).send({ error: "Invalid reason length" });

  try {
    const review = await Review.findByIdAndUpdate(
      id,
      {
        reviewed: true,
        accepted: false,
        rejectReason: reason,
      },
      { new: true }
    );

    if (!review)
      return res
        .status(400)
        .send({ error: "Review with the given id not found" });

    return res.status(200).send({ message: "Review rejected successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

// Delete a review
router.delete("/id/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).send({ error: "Invalid review id" });

  try {
    const review = await Review.findByIdAndDelete(id);

    if (!review)
      return res
        .status(400)
        .send({ error: "Review with the given id not found" });
    res.status(200).send({ message: "Review deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
