const mongoosse = require("mongoose");

const mongooseConnection = async () => {
  try {
    await mongoosse.connect(
      `mongodb+srv://${process.env.BD_USER}:${process.env.MONGO_PASS}@deliveries.jahzzog.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Erro ao Conectar com o banco de dados ", err);
  }
};

module.exports = mongooseConnection;
