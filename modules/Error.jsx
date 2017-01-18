import React from 'react';

import Nav from './components/Nav';
import Header from './components/Header';
import Message from './components/Message';

export default class Error extends React.Component {

    render() {

        return (
            <div>
                <Nav user={this.props.user}/>
                <Message title={this.props.message} subtitle={this.props.error.status} description={this.props.error.stack}/>
                <Header user={this.props.user}/>
            </div>
        );
    }
}
