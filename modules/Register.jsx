import React from 'react';

import Nav from './components/Nav';
import Header from './components/Header';
import RegisterForm from './components/auth/RegisterForm';
import Message from './components/Message';

export default class Register extends React.Component {

    render() {

        return (
            <div>
                <Nav user={this.props.user}/>
                <Message title={this.props.message}/>
                <Header user={this.props.user} hideAuth={true}/>
                <RegisterForm/>
            </div>
        );
    }
}
