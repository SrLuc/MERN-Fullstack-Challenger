const express = require("express");
const handleError = require("./middlewares/error");
const devliveriesRoutes = require("./routes/deliveries-routes");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(handleError());
app.use(cors());
app.use(devliveriesRoutes);


module.exports = app;
