import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Layout from '../views/Layout.jsx';
import Index from '../views/Index.jsx';
import About from '../views/About.jsx';

export default
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Index} />
            <Route path="about" component={About} />
        </Route>
    </Router>

