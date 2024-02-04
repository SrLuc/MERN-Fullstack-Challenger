require("dotenv").config();
const HttpError = require("../models/error-model");
const axios = require("axios");
const { extractAddressComponents } = require("../js/extractAddressComponents");

const getCoordinatesByAddress = async (address) => {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${process.env.GEOLOCATION_GOOGLE_API_KEY}`
  );
  const data = response.data;

  if (!data || data.status === "ZERO_RESULTS") {
    const error = new HttpError(
      "Could not find location for the specified address.",
      422
    );
    throw error;
  }
  const addressExtracted = extractAddressComponents(data);
  console.log(addressExtracted);
  return addressExtracted;
};

//getCoordinatesByAddress("Rua Claudio Brotherhood")

module.exports = getCoordinatesByAddress;
