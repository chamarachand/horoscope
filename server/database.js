const mongoose = require("mongoose");

const connection = () => {
  const localUrl = "mongodb://localhost:27017/horoscope-db";

  mongoose
    .connect(localUrl)
    .then(() => console.log("Connected to MongoDB.."))
    .catch((error) => console.error("Could not connect to MongoDB!", error));
};

module.exports = connection;
