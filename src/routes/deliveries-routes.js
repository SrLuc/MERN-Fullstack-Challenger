const express = require("express");
const route = express.Router();
const DeliveriesController = require("../controllers/delivery-controller");
const validator = require("../certificates/delivery-validator");

// teste router
route.get("/", DeliveriesController.DeliveriesTest);

// get all deliveries
route.get("/deliveries", DeliveriesController.getDeliveries);

// get deliveries by id
route.get("/deliveries/:id", DeliveriesController.getDeliveriesById);

// get deliveries by name with validation
route.post("/deliveries",validator.deliveryValidator ,DeliveriesController.createDelivery);

// update deliveries by id
route.delete("/deliveries", DeliveriesController.deleteAllDeliveries);

module.exports = route;
