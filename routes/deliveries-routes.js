const express = require("express");
const route = express.Router();
const DeliveriesController = require("../controllers/delivery-controller");
const validator = require("../certificates/delivery-validator");

route.get("/deliveries", DeliveriesController.getDeliveries);
route.post("/deliveries",validator.deliveryValidator ,DeliveriesController.createDelivery);
route.delete("/deliveries", DeliveriesController.deleteAllDeliveries);

module.exports = route;
