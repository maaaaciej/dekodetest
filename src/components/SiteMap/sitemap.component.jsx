import React from "react";

import forward from "../../assets/forward/forward.svg";

import "./sitemap.styles.scss";

const SiteMap = () => {
  return (
    <div className="sitemap">
      <a href="" className="sitemap-link">
        teft
      </a>
      <img src={forward} alt="" />

      <a href="" className="sitemap-link">
        Circles
      </a>
      <img src={forward} alt="" />

      <span className="sitemap-current">Purple Circles</span>
    </div>
  );
};

export default SiteMap;
