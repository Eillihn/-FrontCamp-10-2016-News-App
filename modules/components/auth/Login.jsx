import React from 'react';
import {Link} from 'react-router';

export default class Login extends React.Component {

    render() {
        return (
            <form action="/login" method="POST" className="form form--login">
                <div className="form__group">
                    <input type="text" name="username" id="username" placeholder="Username"/>
                </div>
                <div className="form__group">
                    <input type="password" name="password" id="password" placeholder="Password"/>
                </div>
                <div className="form__group">
                    <button type="submit" className="btn btn--login">Login</button>
                    <Link to="/signup" className="link link--sign-up">Sign Up</Link>
                </div>
            </form>
        );
    }
}
