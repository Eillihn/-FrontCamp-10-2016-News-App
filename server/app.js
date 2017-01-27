let express = require('express');
let path = require('path');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// Configuring Passport
let passport = require('passport');
let expressSession = require('express-session');
app.use(expressSession({
    secret: 'SECRET_KEY'
}));
app.use(passport.initialize());
app.use(passport.session());

// Using the flash middleware provided by connect-flash to store messages in session
// and displaying in templates
let flash = require('connect-flash');
app.use(flash());

let auth = require('./routes/auth');
let articles = require('./routes/articles');

app.use('/', auth);
app.use('/api', articles);

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

module.exports = app;
