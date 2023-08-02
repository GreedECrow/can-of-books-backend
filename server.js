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
app.use(bp.json());

mongoose.connect(process.env.DATABASE_URL).then(() => console.log("DB Connected"));

app.get("/", (request, response) => {
  response.status(200).json("WootWoot!")
})

//CRUD stuff Starts here.

app.get("/books", async(request, response) => {
  try{
      const Book = await Book.find()
      response.status(200).json(Book)
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

  //Crud Update

    app.put("/book/:id", async (request, respond) =>{
      console.log(request.params.id);
      try{
        await Book.findByIdAndUpdate(request.params.id, request.body);
        response.status(204).send()
      }catch (err){
        response.send (err);
      }
    })

    //  GET Request  /book/123
    //  app.get("/book/:id", async (request, reposnse) => {
    //    console.log(request);
    //    const theBook = await Book.find({_id: request.params.id});
    //    response.json(theBook);
    // })


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
