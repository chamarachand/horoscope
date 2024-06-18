const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { Admin, validate } = require("../models/admin");

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send({ error: error.details[0].message });

    let admin = await Admin.findOne({ username: req.body.username });
    if (admin)
      return res
        .status(409)
        .send({ error: "An admin user with the given id already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    admin = await Admin.create({ ...req.body, password: hashedPassword });
    res.status(201).send({ message: "Admin created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal server error" });
  }
});
