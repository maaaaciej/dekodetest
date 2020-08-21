import React from "react";

import "./imagecontainer.styles.scss";

const ImageContainer = ({ excerpt, image, caption }) => {
  return (
    <div className="imagecontainer">
      <div className="imagecontainer-excerpt">{excerpt || "Excerpt"}</div>
      <img src={image} alt={caption} className="imagecontainer-image" />
      <div className="imagecontainer-caption">{caption || "Image Caption"}</div>
    </div>
  );
};

export default ImageContainer;
