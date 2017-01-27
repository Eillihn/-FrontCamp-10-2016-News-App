let express = require('express');
let router = express.Router();
let Article = require('../models/article');

router.route('/article').get((req, res) => {
    Article.find({}).sort({
        publishedAt: -1
    }).exec((err, articles) => {
        if (!err) {
            return res.json(articles);
        } else {
            res.statusCode = 500;

            return res.json({
                error: 'Server error',
                msg: err
            });
        }
    });
});

router.route('/article/:id').get((req, res) => {
    Article.findOne({
        _id: req.params.id
    }).sort({
        publishedAt: -1
    }).exec((err, article) => {
        if (!err) {
            return res.json(article);
        } else {
            res.statusCode = 500;

            return res.json({
                error: 'Server error',
                msg: err
            });
        }
    });
});

router.route('/article/:id').delete((req, res) => {
    Article.findByIdAndRemove(req.params.id, (err, article) => {
        return !err ? res.json({
            message: 'Article was successfully deleted'
        }) : res.json({
            error: err
        });
    });
});

router.route('/article').post((req, res) => {
    let data = {
            title: req.body.title,
            description: req.body.description,
            author: req.body.author,
            url: req.body.url,
            urlToImage: req.body.urlToImage
        },
        article = new Article(data),
        id = req.body._id;

    if (!!id) {
        Article.update({
            _id: id
        }, data, {}, (err, article) => {
            if (!err) {
                return res.json(article);
            } else {
                res.statusCode = 500;
                return res.json({
                    error: `Server error. ${err}`
                });
            }
        });
    } else {
        article.save((err, article) => {
            if (!err) {
                return res.json(article);
            } else {
                res.statusCode = 500;
                return res.json({
                    error: `Server error. ${err}`
                });
            }
        });
    }
});

module.exports = router;
