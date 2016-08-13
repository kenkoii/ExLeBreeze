/**
 * Created by Kentoy on 8/12/2016.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var authorSchema = new Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    viewCount: { type: Number, default: 0 }
});

var Author = mongoose.model('Author',authorSchema);
module.exports = Author;
