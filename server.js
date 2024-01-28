const app = require("./app");
require("dotenv").config();

app.listen(process.env.PORT, () => {
  
  console.log(`online in http://localhost:${process.env.PORT}`);
});
