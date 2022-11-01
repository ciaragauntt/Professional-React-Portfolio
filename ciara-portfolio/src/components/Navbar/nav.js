import React from 'react';
import './nav.css';
import './index.js'

const Navbar = () => {
    return(
        <div className="topnav">
            <div id="navlinks">
                <a>
                    About
                </a>
                <a>
                    Projects
                </a>
                <a>
                    Professional Experience
                </a>
                <a>
                    Contact Me
                </a>
            </div>
            <a href="javascript:void(0);" class="icon" onClick="hamburger()">
            <i class="fa fa-bars"></i>
            </a>
        </div>
    )
   
}

export default Navbar;