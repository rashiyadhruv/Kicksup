import "./navbar.scss";
import logo from "../../assets/images/websitelogo.png";
import man from "../../assets/images/man.svg";

import { Link } from "react-router-dom";
import React from "react";

const navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="navbar-main">
        <div className="navbar-main-links" id="hov-1">
          <div className="navbar-main-links-underline" id="effect-1"></div>
          <div>
            <Link to="/">HOME</Link>
          </div>
        </div>
        <div className="navbar-main-links" id="hov-2">
          <div className="navbar-main-links-underline" id="effect-2"></div>
          <Link to="/the-journey">THE JOURNEY</Link>
        </div>
        <div className="navbar-main-links" id="hov-3">
          <div className="navbar-main-links-underline" id="effect-3"></div>
          <Link to="/team">TEAM</Link>
        </div>
        <div className="navbar-main-links" id="hov-4">
          <div className="navbar-main-links-underline" id="effect-4"></div>
          <Link to="/store">STORE</Link>
        </div>
        <div className="navbar-main-links" id="hov-5">
          <div className="navbar-main-links-underline" id="effect-5"></div>
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
      <div className="navbar-right">
        <div className="navbar-right-links">
          <img src={man} alt="man" />
          <p className="navbar-main-links">
            <Link to="/profile">GAGAN</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default navbar;
