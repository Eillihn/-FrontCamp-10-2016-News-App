import React from 'react';
import {Link} from 'react-router';

export default class Nav extends React.Component {

    render() {
        let user = this.props.user,
            adminLink = user
                ? <li className="nav-item">
                        <Link to="/admin" className="nav-link" activeClassName="active">Admin</Link>
                    </li>
                : '';

        return (
            <nav className="nav-bar">
                <div className="container">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" activeClassName="active">News</Link>
                        </li>
                        {adminLink}
                    </ul>
                </div>
            </nav>
        );
    }
}
