let express = require('express');
let router = express.Router();
let Article = require('../models/article');

router.get('/admin', function(req, res, next) {
    Article.find({}).sort({publishedAt: -1}).exec(function (err, articles) {
        if (!err) {
            return res.render('admin', {articles: articles});
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
