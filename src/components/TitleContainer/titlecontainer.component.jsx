import React from "react";

import ProfileCard from "../ProfileCard/profilecard.component";

import "./titlecontainer.styles.scss";

import avatar from "./avatar.png";

const TitleContainer = ({ title, ingress }) => {
  return (
    <div className="titlecontainer">
      <h1 className="titlecontainer-title">{title || "Title"}</h1>
      <p className="titlecontainer-ingress">{ingress || "Ingress"}</p>
      <ProfileCard
        /*author={author}*/
        // skal inneholde forfatter, stilling, lesetid, dato, linker til sosiale medier
        readtime="5"
        avatar={avatar}
        date="02/06/2020"
        name="Jane Doe"
        position="Projectmanager Dekode"
        socialsLinks={[
          "https://www.facebook.com/",
          "https://www.instagram.com/",
          "https://twitter.com/",
        ]}
      />
    </div>
  );
};

export default TitleContainer;
