const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./database");
const horoscopeRoutes = require("./routes/horoscopeRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

// connection
connection();

// Middleware
app.use(express.json());
app.use("/horoscope", horoscopeRoutes);
app.use("/review", reviewRoutes);
app.use(cors);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}..`));
