const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./database");

// connection
connection();

// Middleware
app.use(cors);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}..`));
