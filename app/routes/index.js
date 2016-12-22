let express = require('express');
let passport = require('../lib/passport');
let router = express.Router();
let User = require('../models/user');
let checkAuth = require('../middlewares/auth');

router.all('/admin', checkAuth);

router.get('/', (req, res) => {
    res.render('index', {
        message: req.flash('message'),
        user: req.user
    });
});

router.post('/login',
    passport.authenticate('login', {
        successRedirect: '/',
        failureRedirect: '/',
        failureFlash: true
    })
);

router.get('/signup', (req, res) => {
    res.render('register', {
        message: req.flash('message')
    });
});

router.post('/signup', (req, res, next) => {
    let user = new User({
        username: req.body.username,
        password: req.body.password
    });

    user.save((err) => {

        return err ? next(err) : req.login(user, (err) => {
            return err ? next(err) : res.redirect('/');
        });
    });
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;
