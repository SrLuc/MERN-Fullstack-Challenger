const express = require("express");
const devliveriesRoutes = require("./routes/deliveries-routes");
const handleError = require("./middlewares/error");
const app = express();

app.use(express.json());
app.use(handleError());
app.use(devliveriesRoutes);

module.exports = app;
