const express = require("express");
const route = express.Router();
const DeliveriesController = require("../controllers/delivery-controller");

route.get("/", DeliveriesController.DeliveriesTest);
route.get("/deliveries", DeliveriesController.getDeliveries);
route.get("/deliveries/:id", DeliveriesController.getDeliveriesById);
route.post("/deliveries", DeliveriesController.createDelivery);
route.delete("/deliveries", DeliveriesController.deleteAllDeliveries);

module.exports = route;
