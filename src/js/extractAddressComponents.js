const extractAddressComponents = (data) => {

  //logical datas
  const formattedAddress = data.results[0]?.formatted_address || "";
  const addressComponents = formattedAddress.split(",") || [];
  const cityStateComponents = addressComponents[1]?.trim().split(" - ") || [];

  //api datas
  const publicPlace = data.results[0]?.address_components[0]?.long_name || "";
  const city = cityStateComponents[0] || "";
  const state = cityStateComponents[1] || "";
  const country = addressComponents[2]?.trim() || "";
  const geoLocation = data.results[0]?.geometry?.location || {};

  return {
    publicPlace,
    city,
    country,
    state,
    geoLocation,
  };
};

module.exports = { extractAddressComponents };
