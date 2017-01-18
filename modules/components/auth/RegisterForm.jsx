import React from 'react';

export default class RegisterForm extends React.Component {

    render() {
        return (
            <div className="container section--signup">
                <br/>
                <br/>
                <h3 className="text-center">Registration Form</h3>
                <br/>
                <form action="/signup" method="POST" className="form form--signup">
                    <div className="form__group">
                        <input type="text" name="username" id="username" placeholder="Username"/>
                    </div>
                    <div className="form__group">
                        <input type="password" name="password" id="password" placeholder="Password"/>
                    </div>
                    <div className="form__group">
                        <button type="submit" className="btn btn--signup">Register</button>
                    </div>
                </form>
            </div>
        );
    }
}
