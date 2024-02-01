const mongosse = require("mongoose");

const deliverySchema = new mongosse.Schema({
  name: { type: String, required: true },
  kg: { type: String, required: true },
  address: {
    publicPlace: { type: String, required: true },
    city: { type: String, required: false },
    state: { type: String, required: false },
    country: { type: String, required: true },
    location: [
      {
        type: Number,
        required: true,
      },
    ],
  },
});

const deliveryModel = mongosse.model("delivery", deliverySchema);

module.exports = deliveryModel;
