let express = require('express');
let router = express.Router();
let Article = require('../models/article');

router.route('/articles').get((req, res) => {
    Article.find({}).sort({publishedAt: -1}).exec(function (err, articles) {
        if (!err) {
            return res.json({articles: articles});
        } else {
            res.statusCode = 500;

            return res.json({
                error: 'Server error',
                msg: err
            });
        }
    });
});

router.route('/article/create').post((req, res) => {
    let article = new Article({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
        url: req.body.url,
        urlToImage: req.body.urlToImage
    });
    article.save((err, article) => {
        if (!err) {
            return res.json({
                article: article
            });
        } else {
            res.statusCode = 500;
            return res.json({
                error: 'Server error',
                msg: err
            });
        }
    });
});

router.route('/article/delete').delete((req, res) => {
    Article.findOneAndRemove({
        title: req.body.title
    }, function(err) {
        if (!err) {
            return res.json({
                msg: `Article - ${req.body.title} - was deleted.`
            });
        } else {
            res.statusCode = 500;
            return res.json({
                error: 'Server error',
                msg: err
            });
        }
    });
});

module.exports = router;