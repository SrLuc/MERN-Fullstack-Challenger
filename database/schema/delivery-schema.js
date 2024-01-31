const mongosse = require("mongoose");

const deliverySchema = new mongosse.Schema({
  name: { type: String, required: true },
  kg: { type: Number, required: true },
  address: {
    publicPlace: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
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
