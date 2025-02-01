import React from "react";
import "./Navbar.css"

import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import react from "react"; react
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>2-Good Gas</p>
            </div>
            <ul className="nav-menu">
                <li>Cylinder</li>
                <li>Accessaries</li>
                <li>Services</li>
                <li>Marketing</li>
            </ul>

        </div>
    )
}

export default Navbar