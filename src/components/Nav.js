import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import './mediaquery.css';

function Nav() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <nav>
                <Link to="/">
                    <img className="logo" src="logo2.png" alt="logo" />
                </Link>
                <div className="menu-icon" onClick={() => setOpenMenu(!openMenu)}>
                    <i className={openMenu ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className="nav-links">
                    <Link to="/services">
                        <li>Usługi</li>
                    </Link>
                    <Link to="/construction">
                        <li>Budownictwo</li>
                    </Link>
                    <HashLink to="/#realizations">
                        <li>Realizacje</li>
                    </HashLink>
                    <HashLink to="/#contact">
                        <li>Kontakt</li>
                    </HashLink>
                </ul>
            </nav>
            <div className="nav-hidden" style={{ display: openMenu ? 'block' : 'none' }}>
                <ul className="active">
                    <Link to="/services" onClick={() => setOpenMenu(false)}>
                        <li>Usługi</li>
                    </Link>
                    <Link to="/construction" onClick={() => setOpenMenu(false)}>
                        <li>Budownictwo</li>
                    </Link>
                    <HashLink to="/#realizations" onClick={() => setOpenMenu(false)}>
                        <li>Realizacje</li>
                    </HashLink>
                    <HashLink to="/#contact" onClick={() => setOpenMenu(false)}>
                        <li>Kontakt</li>
                    </HashLink>
                </ul>
            </div>
        </>
    )
}

export default Nav
