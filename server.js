/**
 * Created by Kentoy on 8/12/2016.
 */
var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8080;
var db = mongoose.connect('mongodb://root:password@ds153715.mlab.com:53715/kentoybookapi');

var Book = require('./models/Book');
var Author = require('./models/Author');
bookRouter = require('./routes/bookRoutes')(Book);
authorRouter = require('./routes/authorRoutes')(Author);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/api/Books', bookRouter);
app.use('/api/Authors', authorRouter);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, function(){
    console.log("Listening on port: "+port);
});