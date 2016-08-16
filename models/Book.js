/**
 * Created by Kentoy on 8/12/2016.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var bookSchema = new Schema({
    title: { type: String, required: true },
    author: {
        id: String,
        name: String
    },
    description: { type: String },
    genre: { type: String, required: true },
    image: { type: String },
    read: { type: Boolean, default: false },
    viewCount: { type: Number, default: 0 }
});

var Book = mongoose.model('Book',bookSchema);
module.exports = Book;
