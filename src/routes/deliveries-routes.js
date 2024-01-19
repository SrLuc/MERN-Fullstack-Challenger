const express = require("express");
const route = express.Router();
const DUMMY_DELIVERIES = require("../database/devileries");

//teste router
route.get("/", (req, res, next) => {
  res.send("hello world");
});

//get all deliveries
route.get("/deliveries", (req, res, next) => {
  res.json(DUMMY_DELIVERIES);
});

//get delivery by id
route.get("/deliveries/:id", (req, res, next) => {
  const deliveryId = req.params.id;
  const delivery = DUMMY_DELIVERIES.find((d) => d.id === deliveryId);
  res.json(delivery);
});

module.exports = route;
