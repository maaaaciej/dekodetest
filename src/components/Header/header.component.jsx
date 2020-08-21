import React from "react";

import logo from "../../assets/logo/logo.svg";
import search from "../../assets/search/search.svg";

import "./header.styles.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <nav className="header-container-nav">
          <a href="https://www.dekode.no" className="header-container-nav-logo">
            <img src={logo} alt="logo" />
          </a>
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
          Search{" "}
          <img className="header-container-search-icon" src={search} alt="" />
        </span>
      </div>
    </header>
  );
};

export default Header;
