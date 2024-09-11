import React from "react";
import "./Nav.scss"
import "./media.scss"

import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

import "./navBtn.scss"
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <section className="navContainer">
                <input type="checkbox" id="openmenu" className="hamburger-checkbox" />

                <div className="hamburger-icon">
                    <label for="openmenu" id="hamburger-label">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <nav className="menu-pane">
                    <div className="nav-head">
                        <Link to="/" ><img src="./Static/logo.png" alt="logo" height="100px" width="100px" /></Link>
                        <p>Bhavnesh</p>
                        <p>DevOps</p>
                    </div>
                    <div className="nav-list">
                        <ul>

                            <Link className="navLinks" ><li>\</li></Link>
                            <Link className="navLinks" to="/work" ><li >Work</li></Link>
                            <Link className="navLinks" to="/about"><li >About</li></Link>
                            <Link className="navLinks"  ><li> /-- Blog --/</li></Link>
                            <Link className="navLinks" to="/contact"  ><li>Contact</li></Link>


                        </ul>
                        <div className="nav-contact">

                            <a href="https://www.linkedin.com/in/bhavnesh-baghel/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn className="linkedin" />
                            </a>
                            <a href="https://www.instagram.com/ibhavneshbaghel_" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="instagram" />
                            </a>
                            <a href="https://github.com/ibhavneshbaghel2213" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="git" />
                            </a>


                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}


export default Nav