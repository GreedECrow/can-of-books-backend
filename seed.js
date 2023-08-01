const mongoose =require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DATABASE_URL);
const Book = require("./models/book");

async function seed(){
    
    await Book.create({
        title: "The Last of Us",
        description: "Was Alright, they all died at the end.",
        status: "Very Sad",
    })

    await Book.create({
        title: "Colouring Book",
        description: "Care bears should not look like that.",
        status: "Difficult read.",
    })

    await Book.create({
        title: "Dodge Ball",
        description: "A cinderella Story",
        status: "Banned in 25 countries.",
    })

    console.log("Go Bookie Go!!");

    mongoose.disconnect();
}

seed();