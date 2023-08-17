import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <section className="top-nav">
            <div>
                <Link className="logonew" to="/">
                    <p>WardrobeMart</p>
                </Link>
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label className="menu-button-container" htmlFor="menu-toggle">
                <div className="menu-button"></div>
            </label>

            <ul className="menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </section>
    );
}
