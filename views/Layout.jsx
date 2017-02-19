import React from 'react';
import { connect } from 'react-redux'

class Layout extends React.Component {
    onHandlePress() {
        alert();
    }

    render() {
        let {custom} = this.props;
        return (
            <html>
            <head>
                <title>{custom.title}</title>
                <link href="/styles.css" rel="stylesheet"/>
            </head>
            <body>
                <h1>{custom.title}</h1>
                <button className="btn" onClick={this.onHandlePress.bind(this)}>Нажми меня</button>
                {this.props.children}
                <script dangerouslySetInnerHTML={{
                    __html: 'window.PROPS=' + JSON.stringify(custom)
                }} />
                <script src="/bundle.js"/>
            </body>
            </html>
        )
    }
}

function mapStateToProps (state) {
    return {
        custom: state
    }
}

export default connect(mapStateToProps)(Layout);