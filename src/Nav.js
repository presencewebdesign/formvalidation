import React from 'react';
// using ES6 modules
import { Link, IndexLink } from 'react-router';

const Nav = props => (
    <div className="top-bar">
        <ul className="menu">
            <li>
                <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Login</IndexLink>
            </li>
            <li>
                <Link to="/register" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Register</Link>
            </li>
        </ul>
    </div>
);

export default Nav;
