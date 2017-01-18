import React from 'react';

export default class Logout extends React.Component {
    render() {
        return (
            <div className="logged-user">
                <h1 className="title">Hello, {this.props.username}!</h1>
                <div className="text-right">
                    <a href="/logout" className="link">Log Out</a>
                </div>
            </div>
        );
    }
}
