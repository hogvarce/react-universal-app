import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes/routes.jsx';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

function reducer(state) { return state };
const store = createStore(reducer, window.PROPS);

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>, document
);
