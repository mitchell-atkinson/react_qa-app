import React from 'react';
import {Link} from 'react-router-dom';

// Simple function to return the navbar to the root
function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-primary fixed-top">
            <Link className="navbar-brand" to="/">
                Q&amp;App 
            </Link>
        </nav>
    );
}

export default NavBar;