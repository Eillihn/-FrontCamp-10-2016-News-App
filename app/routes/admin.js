let express = require('express');
let router = express.Router();
let Article = require('../models/article');
let checkAuth = require('../middlewares/auth');

let React = require('react');
let {renderToString} = require('react-dom/server');
let Admin = require('../../modules/Admin').default;
let template = require('../template').default;

router.route('/admin').all(checkAuth).get((req, res, next) => {
    Article.find({}).sort({publishedAt: -1}).exec((err, articles) => {
        if (!err) {
            const initialState = {
                user: req.user,
                articles: articles
            };
            const component = renderToString(<Admin {...initialState}/>);

            return res.send(template({body: component, initialState: JSON.stringify(initialState)}));
        } else {
            res.statusCode = 500;

            return res.json({error: 'Server error', msg: err});
        }
    });
});

module.exports = router;
