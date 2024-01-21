require("dotenv").config();
const HttpError = require("../models/error-model");
const axios = require("axios");
const {extractAddressComponents} = require("../js/extractAddressComponents");

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
};

getCoordinatesByAddress("Rua José Inácio do Carmo");
getCoordinatesByAddress("Rua Cláudio Brotherhood");
getCoordinatesByAddress("Rua da Aurora");
//getCoordinatesByAddress("Rua do Bom Jesus")
//getCoordinatesByAddress("Rua Gastão Vidigal");
//getCoordinatesByAddress("Rua Vicente Zírpoli")
//getCoordinatesByAddress("Rua do Sol");
//getCoordinatesByAddress("Rua Repartimento");
//getCoordinatesByAddress("Rua tatuamunha");
//getCoordinatesByAddress("Rua Álvares Pires");
//getCoordinatesByAddress("Rua Padre Julio Maria");
//getCoordinatesByAddress("Rua Plutão, Rio de Janeiro");
//getCoordinatesByAddress("Rua osaka");
//getCoordinatesByAddress("13 Rue du Souvenir");
//getCoordinatesByAddress("Neuschönefeld");
//getCoordinatesByAddress("Priv. Guanajuato 2964");

module.exports = getCoordinatesByAddress;
