const DUMMY_DELIVERIES = require("../models/data-deliveries-model");
const HttpError = require("../models/error-model");

const DeliveriesTest = (req, res, next) => {
  res.json("Hello Wolrd");
};

const getDeliveries = (req, res, next) => {
  res.json(DUMMY_DELIVERIES);
};

const getDeliveriesById = (req, res, next) => {
  const deliveryId = req.params.id;
  const delivery = DUMMY_DELIVERIES.find((d) => {
    return d.id === deliveryId;
  });
  if (!delivery) {
    return next(
      new HttpError("Could not find a delivery for the provided id.", 404)
    );
  }
  res.json({ delivery });
};

const createDelivery = (req, res, next) => {
  const { name, kg, address } = req.body;
  const createdDelivery = {
    name,
    kg,
    address,
  };
  DUMMY_DELIVERIES.push(createdDelivery);
  res.status(201).json({ delivery: createdDelivery });
};

const deleteAllDeliveries = (req, res, next) => {
  DUMMY_DELIVERIES.length = 0;
  res.status(200).json({ message: "All deliveries deleted" });
};

module.exports = {
  DeliveriesTest,
  getDeliveries,
  getDeliveriesById,
  createDelivery,
  deleteAllDeliveries,
};
