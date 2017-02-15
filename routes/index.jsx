import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Component from '../Component.jsx';
import {Router, Route, browserHistory, match, RouterContext} from 'react-router';

const router = express.Router();

router.get('*', (req, res) => {
    let props = {title: "universal application"};
    match({
        routes: (
            <Router history={browserHistory}>
                <Route path="/" component={Component}/>
            </Router>
        ), location: req.url
    }, (error, redirectLocation, renderProps) => {
        if (renderProps) {
            const html = ReactDOMServer.renderToString(
                <RouterContext {...renderProps}
                createElement={(Component, renderProps)=>{
                       return <Component {...renderProps} {...props} />
                }}/>);
            res.send(html);
        } else {
            res.status(404).send('Not Found');
        }
    });
});

module.exports = router;