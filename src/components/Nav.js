import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
function Nav() {
    return (
        <nav>
            <Link to="/">
                <img className="logo" src="logo2.png" alt="logo" />
            </Link>
            <ul className="nav-links">
                <Link to="/services">
                    <li>Usługi</li>
                </Link>
                <Link to="/construction">
                    <li>Budownictwo</li>
                </Link>
                <HashLink smooth to="/#realizations">
                    <li>Realizacje</li>
                </HashLink>
                <HashLink smooth to="/#contact">
                    <li>Kontakt</li>
                </HashLink>
            </ul>
        </nav>
    )
}

export default Nav
