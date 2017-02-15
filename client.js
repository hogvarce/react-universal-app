import React from 'react';
import ReactDOM from 'react-dom';
import Component from './Component.jsx';

const props = window.PROPS;

ReactDOM.render(
    React.createElement(Component, props), document
);
