/**
 * Created by Kentoy on 8/13/2016.
 */
var bookController = function(Book){

    var post = function(req,res){
        var book = new Book(req.body);
        book.save(function(err){
            if(err) console.log(err);
            res.status(201).send(book);
        })
        console.log(book);
    }

    var get = function(req,res){
        var query = {};
        if(req.query.genre) query.genre = req.query.genre;
        Book.find(query, function(err,books){
            if(err)
                res.status(500).send(err);
            else
                res.json(books);
        });
    }

    return{
        post: post,
        get: get
    }
}

module.exports = bookController;