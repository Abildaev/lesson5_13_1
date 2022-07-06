import React from 'react';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <ul className="container">
            <li>
                <NavLink to="/">main page</NavLink>
            </li>
            <li>
                <NavLink to="/blogs">blogs page</NavLink>
            </li>
        </ul>
    );
}
export default Header;