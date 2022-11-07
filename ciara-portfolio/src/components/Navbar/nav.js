import React, { useState } from 'react';
import './nav.css';
import './index.js';
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }
    return(
        <nav className = "navBar">
            <button onClick  = {handleToggle}> {navbarOpen ? (
    <MdClose style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
  ) : (
    <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
  )} </button>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                <a>About</a>
                <a>Skills</a>
                <a>Projects</a>
                <a>Contact</a>
            </ul>
        </nav>
    )
   
}

export default Navbar;