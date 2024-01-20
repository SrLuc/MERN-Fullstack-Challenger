const express = require("express");
const devliveriesRoutes = require("./routes/deliveries-routes");
const handleError = require("./middlewares/error");
const unsupportedRoutes = require("./middlewares/unsupported");
const app = express();

app.use(express.json());
app.use(handleError());
app.use(devliveriesRoutes);
app.use(unsupportedRoutes);

module.exports = app;
