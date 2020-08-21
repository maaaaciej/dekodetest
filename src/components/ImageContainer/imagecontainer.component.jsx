import React from "react";

import "./imagecontainer.styles.scss";

const ImageContainer = ({ excerpt, image, caption }) => {
  return (
    <div className="imagecontainer">
      <div className="imagecontainer-excerpt">{excerpt || "Excerpt"}</div>
      <figure className="imagecontainer-image">
        <img src={image} alt={caption} />
        <figcaption className="imagecontainer-image-caption">
          {caption || "Image Caption"}
        </figcaption>
      </figure>
    </div>
  );
};

export default ImageContainer;
