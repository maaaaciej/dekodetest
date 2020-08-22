//Importing useState to track wether or not the mobile-menu is open.
import React, { useState } from "react";

import logo from "../../assets/logo/logo.svg";
import search from "../../assets/search/search.svg";
import menu from "../../assets/hamburger/menu.svg";

import "./header.styles.scss";

const Header = () => {
  const [open, setOpen] = useState(false);
  //simple function, that sets the state of the menu to the opposite of what it currently is
  const toggleMenu = () => (open ? setOpen(false) : setOpen(true));

  return (
    <header>
      <div className="header" style={open ? { boxShadow: "none" } : {}}>
        <div className="header-container">
          <img
            src={menu}
            alt=""
            className="header-container-menu"
            onClick={toggleMenu}
          />
          <a href="https://www.dekode.no" className="header-container-logo">
            <img src={logo} alt="logo" />
          </a>
          <nav className="header-container-nav">
            <a
              href="https://dekode.no/"
              rel="noopener noreferrer"
              target="_blank"
              className="header-container-nav-link"
            >
              Circles
            </a>
            <a
              href="https://dekode.no/"
              rel="noopener noreferrer"
              target="_blank"
              className="header-container-nav-link"
            >
              Squares
            </a>
            <a
              href="https://dekode.no/"
              rel="noopener noreferrer"
              target="_blank"
              className="header-container-nav-link"
            >
              Triangles
            </a>
          </nav>
          <span className="header-container-search">
            <span className="header-container-search-text">Search </span>
            <img className="header-container-search-icon" src={search} alt="" />
          </span>
        </div>
      </div>
      <div
        className="mobile-header"
        //hiding/showing the menu based on the boolean in state
        style={open ? { display: `flex` } : { display: `none` }}
      >
        <a
          href="https://dekode.no/"
          rel="noopener noreferrer"
          target="_blank"
          className="mobile-header-link"
        >
          Circles
        </a>
        <a
          href="https://dekode.no/"
          rel="noopener noreferrer"
          target="_blank"
          className="mobile-header-link"
        >
          Squares
        </a>
        <a
          href="https://dekode.no/"
          rel="noopener noreferrer"
          target="_blank"
          className="mobile-header-link"
        >
          Triangles
        </a>
      </div>
    </header>
  );
};

export default Header;
