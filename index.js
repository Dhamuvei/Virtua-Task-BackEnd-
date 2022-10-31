const express = require("express");
const app = express();
const cors = require("cors");
require("./DataBase/db");
require('dotenv').config();

app.use(cors());
app.use(express.json());

const Router = require("./Routers/Router");
app.use(Router);
app.use("/images", express.static("./images"));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
