const extractAddressComponents = (data) => {
  const publicPlace = data.results[0].address_components[0].long_name;
  const formattedAddress = data.results[0].formatted_address;
  const addressComponents = formattedAddress.split(",");
  const cityStateComponents = addressComponents[1].trim().split(" - ");
  const city = cityStateComponents[0];
  const state = cityStateComponents[1];
  const country = addressComponents[2].trim();

  return {
    publicPlace,
    city,
    country,
    state,
  };
};

module.exports = { extractAddressComponents };
