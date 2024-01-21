const DUMMY_DELIVERIES = [
  {
    id: "1",
    name: "Delivery In Jakarta",
    kg: 12,
    address: {
      publicPlace: "Jalan Utama",
      city: "Jakarta",
      state: "Java",
      country: "Indonesia",
      geoLocation: {
        lat: -6.2088,
        lng: 106.8456,
      },
    },
  },
  {
    id: "2",
    name: "Delivery in Beijing",
    kg: 18,
    address: {
      publicPlace: "Main Street",
      city: "Beijing",
      state: "Beijing",
      country: "China",
      geoLocation: {
        lat: 39.9042,
        lng: 116.4074,
      },
    },
  },
  {
    id: "3",
    name: "Delivery in Sydney",
    kg: 14,
    address: {
      publicPlace: "George Street",
      city: "Sydney",
      state: "New South Wales",
      country: "Australia",
      geoLocation: {
        lat: -33.8688,
        lng: 151.2093,
      },
    },
  },
];

module.exports = DUMMY_DELIVERIES;
