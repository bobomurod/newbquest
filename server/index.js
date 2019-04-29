//bismillah
// @author Saidalo Yodgorov  https://t.me/Saidalo1    https://github.com/robertocavalli
// @coding Bobomurod Boboev  https://t.me/b0b0mur0d   https://github.com/bobomurod


const express = require("express");
const volleyball = require("volleyball");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const middlewares = require("./auth/middlewares");

require("dotenv").config({ path: process.env.ENV_FILE });
require("dotenv").config({ path: "./.env" });

//const bodyParser = require('body-parser');

//const morgan = require('morgan');
//const cors = require('cors');

const app = express();

const auth = require("./auth/index.js");
const products = require("./products/index.js");
const shops = require("./shops/index.js");
const shops = require("./users/index.js");

app.use(volleyball);
app.use(express.json());
app.use(middlewares.checkTokenSetUser);

app.use(
  cors({
    origin: ["http://localhost:8080", "http://route1.myapp.local:8081", "http://localhost:8082"]
  })
);
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded( { extended: false } ))

//app.use(morgan('dev'));
//app.use(cors());


app.get("/", (req, res) => {
  res.json({
    message: "Hello World! ",
    user: req.user
  });
});

app.use("/auth", auth);
app.use("/products", products);
app.use("/shops", shops);
app.use("/users", users);


function notFound(req, res, next) {
  res.status(404);
  const error = new Error("Not Found - " + req.originalUrl);
  next(error);
}

function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: err.stack
  });
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Listening on port", port);
});
