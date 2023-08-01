'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const bp = require("body-parser");
require("dotenv").config();

// Step 8. may have to move (So far haven't.)
const Book=require("./models/book")
mongoose.connect(process.env.DATABASE_URL);

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.get("/", (request, response) => {
  response.status(200).json("WootWoot!")
})

//CRUD stuff Starts here.

app.get("/books", async(request, response) => {
  try{
      const allBooks = await Book.find(request.query)
      response.status(200).json(allBooks)
  }catch{
      console.log(err)
      response.status(404).json(err)
  }
})

// Crud Create

app.post("/book", async(request, response) => {
  try {
      const newBook = await Book.create(request.body)
      response.status(200).jason(newBook)
  }catch (error){
      response.status(500).json(error)
    }
  })

  // Crud Delete

  app.delete("/book/:id" , async (request, reposnse) => {
    console.log(request);
    try {
      const id = request.params.id;
      console.log(id)
      const deletedBook = await Book.findByIdAndDelete(id)
      response.status(200).json(deletedBook)
    }catch (err) {
        response.status(500).json(err)
    }
  });

app.listen(PORT, () => console.log(`listening on ${PORT}`));
