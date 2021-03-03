import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => (
    <ul className="nav-links">
        <li>
            <NavLink
                exact
                to="/"
                className="navigation-link">Bubbles</NavLink>
        </li>
        <li>
            <NavLink
                exact
                to="/bundles"
                className="navigation-link">Bundles</NavLink>
        </li>
        <li>
            <NavLink
                exact
                to="/about"
                className="navigation-link">About us</NavLink>
        </li>
        <li>
            <a href="#">Cart</a>
        </li>


    </ul>

);

export default NavLinks;