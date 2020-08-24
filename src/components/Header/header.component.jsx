//Importing useState to track wether or not the mobile-menu is open.
import React, { useState } from "react";

import logo from "../../assets/logo/logo.svg";
import search from "../../assets/search/search.svg";
import menu from "../../assets/hamburger/menu.svg";

import MobileMenu from "../MobileMenu/mobilemenu.component";

import "./header.styles.scss";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearchfield, setOpenSearchfield] = useState(false);
  //simple function, that sets the state of the menu to the opposite of what it currently is
  const toggleMenu = () => (openMenu ? setOpenMenu(false) : setOpenMenu(true));
  const showSearch = () => setOpenSearchfield(true);
  const hideSearch = () => setOpenSearchfield(false);

  return (
    <header>
      {/* Hides the box shadown when the menu is open */}
      <div className="header" style={openMenu ? { boxShadow: "none" } : {}}>
        <div className="header-container">
          <img
            src={menu}
            alt=""
            id="mobile-menu"
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
          <div className="header-container-search" onClick={showSearch}>
            {openSearchfield ? (
              <input
                type="search"
                placeholder="Search"
                autoFocus={true}
                onBlur={hideSearch}
              />
            ) : (
              <span className="header-container-search-text">Search </span>
            )}
            <img className="header-container-search-icon" src={search} alt="" />
          </div>
        </div>
      </div>
      {/* Rendering the mobile menu based on the boolean in state */}
      {openMenu ? <MobileMenu /> : null}
    </header>
  );
};

export default Header;
