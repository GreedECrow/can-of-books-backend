const mongoose = require("mongoose");

const {Schema} = mongoose;

const bookSchema = new Schema({
    title: String,
    img_url: String,
    description: String,
    status: String,

})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;