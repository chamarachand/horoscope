const mongoose = require("mongoose");
const Joi = require("joi");

const reviewSchema = new mongoose.Schema({
  name: { type: String, minlength: 5, maxlength: 25 },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, minlength: 3, maxlength: 255 },
  reviewed: { type: Boolean, default: false },
  accepted: { type: Boolean, default: false },
  rejectReason: { type: String, minlength: 3, maxlength: 1024 },
});

const Review = mongoose.model("Review", reviewSchema);

function validateReview(review) {
  const schema = Joi.object({
    name: Joi.string(),
    rating: Joi.number().min(1).max(5).required(),
    comment: Joi.string().min(3).max(255),
    // reviewed: Joi.boolean(),
    // accepted: Joi.boolean(),
    // rejectReason: Joi.string().min(3).max(1024)
  });
  return schema.validate(review);
}

module.exports = { Review, validate: validateReview };
