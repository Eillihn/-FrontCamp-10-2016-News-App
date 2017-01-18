let express = require('express');
let passport = require('../lib/passport');
let router = express.Router();
let User = require('../models/user');

let React = require('react');
let {renderToString} = require('react-dom/server');
let App = require('../../modules/App').default;
let Register = require('../../modules/Register').default;
let template = require('../template').default;

router.get('/', (req, res) => {
    const initialState = {
        user: req.user,
        message: req.flash('message')
    };
    const component = renderToString(<App {...initialState}/>);

    res.send(template({body: component, initialState: JSON.stringify(initialState)}));
});

router.post('/login', passport.authenticate('login', {
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash: true
}));

router.get('/signup', (req, res) => {
    const initialState = {
        user: req.user,
        message: req.flash('message')
    };
    const component = renderToString(<Register {...initialState}/>);
    res.send(template({body: component, initialState: JSON.stringify(initialState)}));
});

router.post('/signup', (req, res, next) => {
    let user = new User({username: req.body.username, password: req.body.password});

    user.save((err) => {

        return err
            ? next(err)
            : req.login(user, (err) => {
                return err
                    ? next(err)
                    : res.redirect('/');
            });
    });
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;
