import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">My Project</div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/jobs">Jobs</Link></li>
                <li><Link to="/rewards">Rewards</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
