'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const bp = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());



app.get("/", (request, response) => {
  response.status(200).json("WootWoot!")
})


app.listen(PORT, () => console.log(`listening on ${PORT}`));
