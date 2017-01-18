import React from 'react';

import Logo from './Logo';
import Login from './auth/Login';
import Logout from './auth/Logout';

export default class Header extends React.Component {

    render() {
        let user = this.props.user,
            authBlock = '';

        if (!this.props.hideAuth) {
            authBlock = user
                ? <Logout username={user.username}/>
                : <Login/>;
        }

        return (
            <div className="container">
                <header className="header">
                    <div className="pull-left">
                        <Logo/>
                    </div>
                    <div className="pull-right">
                        {authBlock}
                    </div>
                </header>
            </div>
        );
    }
}
