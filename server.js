'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const bp = require("body-parser");
require("dotenv").config();

// Step 8. may have to move
const Book=require("./models/book")
mongoose.connect(process.env.DATABASE_URL);

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());



app.get("/", (request, response) => {
  response.status(200).json("WootWoot!")
})

app.get("/books", async(request, response) => {
  const allBooks = await Book.find(request.query)
  response.status(200).json(allBooks)
})
app.listen(PORT, () => console.log(`listening on ${PORT}`));
