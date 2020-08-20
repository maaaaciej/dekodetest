import React from "react";
import { ReactComponent as Forward } from "./forward.svg";

import "./sitemap.styles.scss";

const SiteMap = () => {
  return (
    <div className="sitemap">
      <a href="" className="sitemap-link">
        teft
      </a>
      <Forward />
      <a href="" className="sitemap-link">
        Circles
      </a>
      <Forward />

      <a className="sitemap-link">Purple Circles</a>
    </div>
  );
};

export default SiteMap;
