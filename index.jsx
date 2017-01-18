import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './modules/App';
import Admin from './modules/Admin';
import Register from './modules/Register';

if (process.env.BROWSER) {
    require('./modules/default.less');
}

render((
    <Router history={browserHistory}>
        <Route path="/" component={() => (<App {...window.__APP_INITIAL_STATE__}/>)}/>
        <Route path="/admin" component={() => (<Admin {...window.__APP_INITIAL_STATE__}/>)}/>
        <Route path="/signup" component={() => (<Register {...window.__APP_INITIAL_STATE__}/>)}/>
    </Router>
), document.getElementById('app'))
