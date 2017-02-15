import React from 'react';

export default class Component extends React.Component {
    onHandlePress() {
        alert();
    }

    render() {
        return (
            <html>
            <head>
                <title>{this.props.title}</title>
                <link href="/styles.css" rel="stylesheet"/>
            </head>
            <body>
                <h1>{this.props.title}</h1>
                <button className="btn" onClick={this.onHandlePress.bind(this)}>Нажми меня</button>
                <script dangerouslySetInnerHTML={{
                    __html: 'window.PROPS=' + JSON.stringify(this.props)
                }} />
                <script src="/bundle.js"/>
            </body>
            </html>
        )
    }
}