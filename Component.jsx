import React from 'react';

export default class Component extends React.Component {
    onHandlePress() {
        alert();
    }

    render() {
        return (
            <html>
            <head>
                <link href="/styles.css" rel="stylesheet"/>
            </head>
            <body>
                <h1>Hello REact</h1>
                <button onClick={this.onHandlePress.bind(this)}>Нажми меня</button>
                <script src="/bundle.js"/>
            </body>
            </html>
        )
    }
}