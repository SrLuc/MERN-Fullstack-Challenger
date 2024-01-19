const express = require("express");
const devliveriesRoutes = require("./routes/deliveries-routes");

const app = express();

app.use(express.json());
app.use(devliveriesRoutes);

module.exports = app;
