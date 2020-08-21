import React from "react";

import facebook from "../../assets/socials/facebook.svg";
import instagram from "../../assets/socials/instagram.svg";
import twitter from "../../assets/socials/twitter.svg";

import "./profilecard.styles.scss";

const ProfileCard = ({ author }) => {
  const { avatar, readtime, name, date, position, socials } = author;
  return (
    <div className="profilecard">
      <img src={avatar} alt={`${name}`} />
      <div className="profilecard-container">
        <h4 className="profilecard-container-name">{`${name || "Name"}`}</h4>
        <p className="profilecard-container-text">{`${
          position || "Position"
        } - ${readtime || "Readtime"} min read - ${date || "21/08/2020"}`}</p>
        <span className="profilecard-container-socials">
          <a href={socials[2]} className="profilecard-container-socials-link">
            <img
              classname="profilecard-container-socials-link-icon"
              src={twitter}
              alt=""
            />
          </a>
          <a href={socials[1]} className="profilecard-container-socials-link">
            <img
              classname="profilecard-container-socials-link-icon"
              src={instagram}
              alt=""
            />
          </a>
          <a href={socials[0]} className="profilecard-container-socials-link">
            <img
              classname="profilecard-container-socials-link-icon"
              src={facebook}
              alt=""
            />
          </a>
        </span>
      </div>
    </div>
  );
};

export default ProfileCard;
