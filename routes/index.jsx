import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import routes from './routes.jsx';
import {match, RouterContext} from 'react-router';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

const router = express.Router();

function reducer(state) { return state; }

router.get('*', (req, res) => {
    let initialState = {title: "universal application"};
    let store = createStore(reducer, initialState);
    match({
        routes: routes,
        location: req.url
    }, (error, redirectLocation, renderProps) => {
        if (renderProps) {
            const html = ReactDOMServer.renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps} />
                </Provider>
            );
            res.send('<!DOCTYPE html>' + html);
        } else {
            res.status(404).send('Not Found');
        }
    });
});

export default router;