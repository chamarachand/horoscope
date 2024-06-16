const mongoose = require("mongoose");
require("dotenv").config();

const connection = () => {
  const localUrl = "mongodb://localhost:27017/horoscope-db";
  const cloudUrl = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}.ofmxo7u.mongodb.net/horoscope-db?retryWrites=true&w=majority&appName=Sithum`;

  mongoose
    .connect(cloudUrl)
    .then(() => console.log("Connected to MongoDB.."))
    .catch((error) => console.error("Could not connect to MongoDB!", error));
};

module.exports = connection;
