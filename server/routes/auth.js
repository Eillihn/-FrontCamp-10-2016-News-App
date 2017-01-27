let express = require('express');
let passport = require('../lib/passport');
let router = express.Router();
let User = require('../models/user');
let {
    redirectIfNotLoggedIn
} = require('../middlewares/auth');

router.all(/^\/admin.*$/, redirectIfNotLoggedIn);

router.post('/login', (req, res, next) => {
    passport.authenticate('login', (err, user, info) => {
        if (err) {
            return res.json({
                error: err
            });
        }
        if (!user) {
            return res.json({
                error: info
            });
        }
        req.logIn(user, function(err) {
            if (err) {
                return res.json({
                    error: err
                });
            }
            return res.json({
                user: user
            });
        });
    })(req, res, next);
});

router.post('/signup', (req, res, next) => {
    User.findOne({
            username: req.body.username
        })
        .exec((err, dbUser) => {
            if (dbUser) {
                return res.json({
                    error: `User: ${req.body.username} - already exist.`
                });
            } else if (err) {
                res.statusCode = 500;

                return res.json({
                    error: 'Server error',
                    msg: err
                });
            } else {
                let user = new User({
                    username: req.body.username,
                    password: req.body.password
                });

                user.save((err) => {
                    return err ?
                        res.json({
                            error: err
                        }) :
                        req.login(user, (err) => {
                            return err ?
                                res.json({
                                    error: err
                                }) :
                                res.json({
                                    user: req.user
                                });
                        });
                });
            }
        });
});

router.post('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;
