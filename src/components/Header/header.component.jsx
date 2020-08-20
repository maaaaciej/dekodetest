import React from "react";

import { ReactComponent as Logo } from "./logo.svg";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <Logo />
      </div>
      <a
        href="https://dekode.no/"
        rel="noopener noreferrer"
        target="_blank"
        className="header-link"
      >
        Circles
      </a>
      <a
        href="https://dekode.no/"
        rel="noopener noreferrer"
        target="_blank"
        className="header-link"
      >
        Squares
      </a>
      <a
        href="https://dekode.no/"
        rel="noopener noreferrer"
        target="_blank"
        className="header-link"
      >
        Triangles
      </a>
      <input type="text" placeholder="Search" className="header-search" />
    </div>
  );
};

export default Header;
