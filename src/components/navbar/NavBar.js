import React, { useState } from 'react';
import './navbar.css';

function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="navbar">
            <nav className="nav-container">
                <div className="logo"><img src="./logo/logo1.png">
                </img>
                </div>
                <ul className="nav-links" style={{ transform: open ? "translateX(0px)" : "" }}>
                    <li><a href="#weare">we are</a></li>
                    <li><a href="#wedo">we do</a></li>
                    <li><a href="#careers">careers</a></li>
                    <li><a href="#form">contact us</a></li>
                </ul>
                <div onClick={() => setOpen(!open)} className="burger">
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;