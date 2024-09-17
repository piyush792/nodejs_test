const express = require('express');
const router = express.Router();
const reqFilter = require('./../middleware');
router.use(reqFilter);
const bodyparser = require('body-parser');

router.use(express.json());
router.use(bodyparser.json());

let articles = [
    {
        id:1,
        title:'article1',
        content: 'content 1',
        comment: []
    },
    {
        id:2,
        title:'article2',
        content: 'content 2',
        comment: []
    },
    {
        id:3,
        title:'article3',
        content: 'content 3',
        comment: []
    },
    {
        id:4,
        title:'article4',
        content: 'content 4',
        comment: []
    }
]

router.get('/articles', (req,res)=>{
    res.json(articles);
})

router.post('/articles', (req, res)=>{

    console.log(req.body);

    const newArticles={
        id:articles.length+1,
        title: req.body.title,
        content:req.body.content,
        comment:[]
    }
    articles.push(newArticles);
    console.log(articles);
    console.log(newArticles);
    res.status(200).json(articles);

})

router.post('/articles/:id/comments', (req, res)=>{

    let articleId = parseInt(req.params.id);

    let articleIds = articles.find(article => article.id===articleId);
    console.log(articleIds);

    const newComment = {
        id: articleIds.comment.length+1,
        comment: req.body.text
    }
    console.log(newComment);
    articleIds.comment.push(newComment);
    res.status(200).send(newComment);

})

router.get('/articles/:id', (req, res)=>{
    const articleId = parseInt(req.params.id);
    const article = articles.find(article=>article.id===articleId);
    console.log(article);

    if(!article){
        res.status(500).send("can't find the article");
    }
    res.status(200).send(article);
    
})

router.get('/about', (req,res)=>{
    return res.send(`<h1>Welcome to AboutUs page ${req.query.age}</h1>`)
})

module.exports = router
