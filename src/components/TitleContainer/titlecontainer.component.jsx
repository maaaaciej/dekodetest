import React from "react";

import ProfileCard from "../ProfileCard/profilecard.component";

import "./titlecontainer.styles.scss";

const TitleContainer = ({ title, ingress, author }) => {
  return (
    <div className="titlecontainer">
      <h1 className="titlecontainer-title">{title || "Title"}</h1>
      <h2 className="titlecontainer-ingress">{ingress || "Ingress"}</h2>
      <ProfileCard author={author} />
    </div>
  );
};

export default TitleContainer;
