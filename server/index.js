const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./database");
const horoscopeRoutes = require("./routes/horoscopeRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const adminRoutes = require("./routes/adminRoutes");
const authRoutes = require("./routes/auth");

// connection
connection();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/horoscope", horoscopeRoutes);
app.use("/reviews", reviewRoutes);
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}..`));
