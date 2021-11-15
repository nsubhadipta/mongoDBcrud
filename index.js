'use strict';
const express = require('express');
const app = express();
require ('dotenv').config();
const cors = require("cors");
const helmet = require("helmet");

app.use(helmet());
app.use(cors());
app.options("*", cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// const db = require("./app/v1/config/mongoDB.config");

const userRoutes = require("./app/v1/routes/user.route");

userRoutes(app, "/api/v1/user");


// Used this block of code to allow CORS
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
//   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//   next();
// });


// require("./api/routes/user.route")(app); //Importing User Routes
// app.get('/demo', (req, res) => {
//   res.send('Demo Working in Help For Huanity')
// });



app.get('*', function (req, res) {
  res.status(404).send('404 Page Not Found!');
});

module.exports = app;
