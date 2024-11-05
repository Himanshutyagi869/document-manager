// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const Header = () => (
    <header className="header">
        <h1>Document Manager</h1>
        <nav>
            <Link to="/">Home</Link>
			<Link to="/">About</Link>
			<Link to="/">Contact</Link>
			<Link to="/">Information</Link>
        </nav>
    </header>
);

export default Header;
