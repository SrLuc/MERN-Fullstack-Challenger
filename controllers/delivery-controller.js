const HttpError = require("../models/error-model");
const getCoordinatesByAddress = require("../util/google-address");
const deliveryModel = require("../database/schema/delivery-schema");
const { validationResult } = require("express-validator");
const { ObjectId } = require("mongodb");
//const DUMMY_DELIVERIES = require("../models/data-deliveries-model");

const DeliveriesTest = (req, res, next) => {
  res.json("Hello Wolrd");
};

const getDeliveries = async (req, res, next) => {
  try {
    const deliveries = await deliveryModel.find();
    res.status(200).json({ deliveries });
  } catch (error) {
    return next(new HttpError("Could not find deliveries.", 404));
  }
};

const createDelivery = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { name, kg, address } = req.body;

  let coordinates;
  try {
    coordinates = await getCoordinatesByAddress(address);
  } catch (error) {
    return next(error);
  }

  const createdDelivery = new deliveryModel({
    name,
    kg,
    address: coordinates,
  });

  const deliveryExists = await deliveryModel.findOne({
    name: name,
    kg: kg,
    address: coordinates,
  });

  if (deliveryExists) {
    return next(
      new HttpError("Delivery already exists, please check your data.", 422)
    );
  }

  try {
    await createdDelivery.save();
    res.status(201).json({ delivery: createdDelivery });
  } catch (error) {
    return next(
      new HttpError("Creating delivery failed, please try again.", 500)
    );
  }
};

const deleteAllDeliveries = async (req, res, next) => {
  try {
    await deliveryModel.deleteMany({});
    res.status(200).json({ message: "All deliveries deleted." });
  } catch (error) {
    return next(new HttpError("Could not delete deliveries.", 404));
  }
};

module.exports = {
  DeliveriesTest,
  getDeliveries,
  createDelivery,
  deleteAllDeliveries,
};
