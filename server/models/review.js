const mongoose = require("mongoose");
const Joi = require("joi");

const reviewSchema = new mongoose.Schema({
  name: { type: String, minlength: 5, maxlength: 25 },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, minlength: 3, maxlength: 255 },
  accepted: { type: Boolean, default: false },
});

const Review = mongoose.model("Review", reviewSchema);

function validateReview(review) {
  const schema = Joi.object({
    name: Joi.string(),
    rating: Joi.number().min(1).max(5).required(),
    comment: Joi.string().min(3).max(255),
    accepted: Joi.boolean(),
  });
  return schema.validate(review);
}

module.exports = { Review, validate: validateReview };
