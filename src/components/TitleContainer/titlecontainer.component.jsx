import React from "react";

import ProfileCard from "../ProfileCard/profilecard.component";

import "./titlecontainer.styles.scss";

const TitleContainer = ({ title, ingress, author }) => {
  return (
    <div className="titlecontainer">
      <h1 className="titlecontainer-title">{title || "Title"}</h1>
      <p className="titlecontainer-ingress">{ingress || "Ingress"}</p>
      <ProfileCard author={author} />
    </div>
  );
};

export default TitleContainer;
