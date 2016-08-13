/**
 * Created by Kentoy on 8/13/2016.
 */
var express = require('express');

var routes = function(Author){
    var authorRouter = express.Router();
    authorRouter.route('/')
        .post(function(req,res){
            var author = new Author(req.body);
            console.log(req.body);
            author.save(function(err){
                if(err) console.log(err);
                res.status(201).send(author);
            })
            console.log(author);
        })
        .get(function(req,res){
            Author.find(function(err,authors){
                if(err) res.status(500).send(err);
                else res.json(authors);
            })
        });
    authorRouter.use('/:authorId',function(req,res,next){
        Author.findById(req.params.authorId,function(err,author){
            if(err)
                res.status(500).send(err);
            else if(author){
                req.author = author;
                next();
            }else{
                res.status(404).send('Author not found');
            }
        });
    });
    authorRouter.route('/:authorId')
        .get(function(req,res){
           res.json(req.author);
        })
        .put(function(req,res){
            console.log(req.body);
            req.author.title = req.body.title;
            req.author.author = req.body.author;
            req.author.genre = req.body.genre;
            req.author.save(function(err){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(req.author);
            });
        })
        .patch(function(req,res){
            if(req.body._id)
                delete req.body._id;
            for(var p in req.body){
                req.author[p] = req.body[p];
            }
            req.author.save(function(err){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(req.author);
            });
        })
        .delete(function(req,res){
            req.author.remove(function(err){
                if(err)
                    res.status(500).send(err);
                else
                    res.status(204).send('Removed');
            });
        });
    return authorRouter;
};

module.exports = routes;