const extractAddressComponents = (data) => {
  const formattedAddress = data.results[0]?.formatted_address || "";
  const addressComponents = formattedAddress.split(",") || [];
  const cityStateComponents = addressComponents[1]?.trim().split(" - ") || [];

  const publicPlace = data.results[0]?.address_components[0]?.long_name || "";
  const city = cityStateComponents[0] || "";
  const state = cityStateComponents[1] || "";
  const zipCode = addressComponents[2]?.trim() || "";

  const countryIndex = addressComponents.length - 1;
  const country = addressComponents[countryIndex]?.trim() || "";

  const geoLocation = data.results[0]?.geometry?.location || {};
  const { lat, lng } = geoLocation;
  const position = [lat, lng];

  return {
    //publicPlace,
    // city,
    //zipCode,
    //state,
    //country,
    geoLocation,
    formattedAddress,
    position, // Adicionando o array 'position' aos resultados
  };
};

module.exports = { extractAddressComponents };
