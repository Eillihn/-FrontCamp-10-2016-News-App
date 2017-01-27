let auth = {

    redirectIfNotLoggedIn: (req, res, next) => {
        req.isAuthenticated() ? next() : res.redirect('/');
    },

    redirectIfLoggedIn: (req, res, next) => {
        req.isAuthenticated() ? res.redirect('/') : next();
    }

};

module.exports = auth;
