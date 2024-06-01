const mongoose = require("mongoose");

const connection = () => {
  const localUrl = "mongodb://localhost:27017/horoscope-db";
  const cloudUrl =
    "mongodb+srv://Sita125:Sithum125@sithum.ofmxo7u.mongodb.net/horoscope-db?retryWrites=true&w=majority&appName=Sithum";

  mongoose
    .connect(cloudUrl)
    .then(() => console.log("Connected to MongoDB.."))
    .catch((error) => console.error("Could not connect to MongoDB!", error));
};

module.exports = connection;
