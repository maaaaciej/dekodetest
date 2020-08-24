import React from "react";

import forward from "../../assets/forward/forward.svg";

import "./sitemap.styles.scss";

const SiteMap = () => {
  return (
    <div className="sitemap">
      <a href="https://www.dekode.no" className="sitemap-link">
        teft
      </a>
      <img src={forward} alt="" />

      <a href="https://www.dekode.no" className="sitemap-link">
        Circles
      </a>
      <img src={forward} alt="forward arrow" />

      <span className="sitemap-current">Purple Circles</span>
    </div>
  );
};

export default SiteMap;
