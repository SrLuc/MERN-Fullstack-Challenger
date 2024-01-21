require("dotenv").config();
const HttpError = require("../models/error-model");
const axios = require("axios");
const { extractAddressComponents } = require("../js/extractAddressComponents");

const API_KEY = "AIzaSyB7Q6umkMcCwXwVb2wl5B4Htdy84fw89F0";

const getCoordinatesByAddress = async (address) => {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`
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

getCoordinatesByAddress("Rua dos Bobos, 0, São Paulo - SP, Brasil");
getCoordinatesByAddress("R. Gilvan Araújo da Silva");
getCoordinatesByAddress("Rua Frei Caneca, 201, São Lourenço, PE, Brasil")
getCoordinatesByAddress("Rua Rio Jiquiá")

module.exports = getCoordinatesByAddress;
