const express = require("express");
const app = express();
require("dotenv").config();

const db = require("./data/db");

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hello from a express server :)");
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
