const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const adminSchema = new mongoose.Schema({
  username: { type: String, minglength: 5, maxlength: 20, required: true },
  password: { type: String, minlength: 5, maxlength: 128, required: true },
});

adminSchema.methods.generateAuthToken = () => {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_PRIVATE_KEY);
  return token;
};

const Admin = mongoose.model("Admin", adminSchema);

function validateAdmin(admin) {
  const schema = Joi.object({
    username: Joi.string().min(5).max(20).required(),
    password: Joi.string().min(5).max(128).required(),
  });

  return schema.validate(admin);
}

module.exports = { Admin, validate: validateAdmin };
