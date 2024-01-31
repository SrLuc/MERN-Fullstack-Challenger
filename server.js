const app = require("./app");
const mongooseConnection = require("./database/conection");
require("dotenv").config();

try {
  app.listen(process.env.PORT, () => {
    console.log(`online in http://localhost:${process.env.PORT}`);
    mongooseConnection();
  });
} catch (err) {
  console.log("Erro ao iniciar o servidor ", err);
}
