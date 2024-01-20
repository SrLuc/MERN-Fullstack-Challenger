const HttpError = require("../models/error-model");

const unsupportedRoutes = (req, res, next) => {
  return next(new HttpError("Unsupported route", 404));
};

module.exports = unsupportedRoutes;
