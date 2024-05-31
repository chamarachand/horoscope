const mongoose = require("mongoose");
const Joi = require("joi");

const horoscopeSchema = new mongoose.Schema({
  name: { type: String, minlength: 5, maxlength: 255, required: true },
  sign: { type: String, minlength: 3, maxlength: 11, required: true },
  gender: { type: String, enum: ["male", "female"] },
  birthDate: { type: Date, required: true },
  birthTime: { type: String, required: true },
  birthDistrict: { type: String, maxlength: 25, required: true },
  submitDate: { type: Date, default: Date.now },
});

const Horoscope = mongoose.model("Horoscope", horoscopeSchema);

function validateHoroscope(horoscope) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(255).required(),
    sign: Joi.string().min(3).max(11).required(),
    gender: Joi.string().valid("male", "female"),
    birthDate: Joi.date().iso().required(),
    birthTime: Joi.string().required(),
    birthDistrict: Joi.string().min(3).max(25).required(),
  });
  return schema.validate(horoscope);
}

module.exports = { Horoscope, validate: validateHoroscope };
