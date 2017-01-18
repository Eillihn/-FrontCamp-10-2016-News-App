let express = require('express');
let path = require('path');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../public')));

// Configuring Passport
let passport = require('passport');
let expressSession = require('express-session');
app.use(expressSession({secret: 'SECRET_KEY'}));
app.use(passport.initialize());
app.use(passport.session());

// Using the flash middleware provided by connect-flash to store messages in session
// and displaying in templates
let flash = require('connect-flash');
app.use(flash());

let auth = require('./routes/auth');
let articles = require('./routes/articles');
let admin = require('./routes/admin');

app.use('/', auth);
app.use('/api', articles);
app.get('/admin', admin);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

let React = require('react');
let {renderToString} = require('react-dom/server');
let Error = require('../modules/Error').default;
let template = require('./template').default;
// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development'
        ? err
        : {};

    // render the error page
    res.status(err.status || 500);
    next(err);

    const initialState = {
        user: req.user,
        message: err.message,
        error: err
    };
    const component = renderToString(<Error {...initialState}/>);
    res.send(template({body: component, initialState: JSON.stringify(initialState)}));
});

module.exports = app;
