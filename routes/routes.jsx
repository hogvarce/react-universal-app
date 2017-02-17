import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import Component from '../Component.jsx';

if (typeof window === 'object') {
    function createElement(Component, props) {
        return <Component {...props} {...window.PROPS}/>;
    }
}

export default
<Router history={browserHistory}>
    <Route path="/" component={Component}/>
</Router>

