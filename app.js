const express = require("express");
const handleError = require("./middlewares/error");
const devliveriesRoutes = require("./routes/deliveries-routes");
const app = express();
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use(express.json());
app.use(handleError());
app.use(cors());
app.use(devliveriesRoutes);
app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
