import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div id="nav">
            <div className="logo">
                <Link to="/">LOGO</Link>
            </div>
            <div className="links">
                {/* <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link> */}

                {/* //! using NavLink its add active class to link */}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            <div className="search-box">
                <input type="text" placeholder="Search..." />
                <button>🔍</button>
            </div>
        </div>
    );
};

export default Navbar;
