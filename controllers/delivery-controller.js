const DUMMY_DELIVERIES = require("../models/data-deliveries-model");
const HttpError = require("../models/error-model");
const getCoordinatesByAddress = require("../util/google-address");
const { validationResult } = require("express-validator");

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

const createDelivery = async (req, res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { name, kg, address } = req.body;

  let addressComponents;
  try {
    addressComponents = await getCoordinatesByAddress(address);
  } catch (error) {
    return res
      .status(422)
      .json({ error: "Could not find location for the specified address." });
  }

  const createdDelivery = {
    id: Math.random().toString(),
    name,
    kg,
    address: addressComponents,
  };

  if (name === DUMMY_DELIVERIES.map((d) => d.name)) {
    return res.status(422).json({ error: "Name already exists." });
  } else {
    DUMMY_DELIVERIES.push(createdDelivery);
    res.status(201).json({ delivery: createdDelivery });
  }
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
