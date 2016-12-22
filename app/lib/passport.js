let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let User = require('../models/user');

passport.use('login', new LocalStrategy({
    passReqToCallback: true
}, (req, username, password, done) => {
    User.findOne({
        username: username
    }, (err, user) => {
        if (err) {
            return done(err, false, req.flash('message', err));
        }
        if (!user) {
            return done(null, false, req.flash('message', `Incorrect username: ${username}.`));
        }
        if (user.password !== password) {
            return done(null, false, req.flash('message', `Incorrect password.`));
        }
        return done(null, user);
    });
}));

passport.use('signup',
    new LocalStrategy({
        passReqToCallback: true
    }, (req, username, password, done) => {
        User.findOne({
            username: username
        }, (err, user) => {
            if (err) {
                return done(err, false, req.flash('message', err));
            }
            if (!user) {
                return done(null, false, req.flash('message', `Incorrect username: ${username}.`));
            }
            if (!!password) {
                return done(null, false, req.flash('message', 'Incorrect password.'));
            }
            return done(null, user);
        });
    })
);

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => err ? done(err) : done(null, user));
});

module.exports = passport;
