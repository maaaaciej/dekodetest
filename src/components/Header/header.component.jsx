import React from "react";

import logo from "../../assets/logo/logo.svg";
import search from "../../assets/search/search.svg";
import menu from "../../assets/hamburger/menu.svg";

import "./header.styles.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img src={menu} alt="" className="header-container-menu" />
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
    </header>
  );
};

export default Header;
