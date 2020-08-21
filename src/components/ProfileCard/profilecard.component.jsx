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
      <span className="profilecard-text">{`${name || "Name"}`}</span>
      <p className="profilecard-text">{`${position || "Position"} - ${
        readtime || "Readtime"
      } min read - ${date || "21/08/2020"}`}</p>
      <span className="profilecard-socials">
        <a href={socials[2]} className="profilecard-socials-link">
          <img src={twitter} alt="" />
        </a>
        <a href={socials[1]} className="profilecard-socials-link">
          <img src={instagram} alt="" />
        </a>
        <a href={socials[0]} className="profilecard-socials-link">
          <img src={facebook} alt="" />
        </a>
      </span>
    </div>
  );
};

export default ProfileCard;
