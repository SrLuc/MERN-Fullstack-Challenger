const express = require("express");
const route = express.Router();

//teste router
route.get("/", (req, res, next) => {
  res.send("hello world");
});

module.exports = route;
