/**
 * Created by Kentoy on 8/12/2016.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId,
        ref: 'Author', required: true },
    genre: { type: String, required: true },
    read: { type: Boolean, default: false },
    viewCount: { type: Number, default: 0 }
});

var Book = mongoose.model('Book',bookSchema);
module.exports = Book;
