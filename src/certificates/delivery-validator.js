const { check } = require("express-validator");

const deliveryValidator = [
  check("name").not().isEmpty().withMessage("Name is required"),
  check("kg").not().isEmpty().withMessage("Kg is required"),
  check("address")
    .not()
    .isEmpty()
    .withMessage("Public place is required"),
];

module.exports = { deliveryValidator };
