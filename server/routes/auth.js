const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { Admin, validate } = require("../models/admin");

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  try {
    const admin = await Admin.findOne({ username: req.body.username });
    if (!admin)
      return res.status(400).send({ error: "Invalid email or password" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      admin.password
    );
    if (!validPassword)
      return res.status(400).send({ error: "Invalid email or password" });

    const token = admin.generateAuthToken();
    res.send({ token, message: "Logged in successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal server error" });
  }
});

module.exports = router;
