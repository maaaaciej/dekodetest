import React from "react";

import facebook from "../../assets/socials/facebook.svg";
import instagram from "../../assets/socials/instagram.svg";
import twitter from "../../assets/socials/twitter.svg";

import "./profilecard.styles.scss";

const ProfileCard = ({
  avatar,
  readtime,
  name,
  date,
  position,
  socialsLinks,
}) => {
  return (
    <div className="profilecard">
      <img src={avatar} alt={`${name}`} />
      <span className="profilecard-text">{`${name}`}</span>
      <p className="profilecard-text">{`${position} - ${readtime} min read - ${date}`}</p>
      <span className="profilecard-socials">
        <a href={socialsLinks[2]} className="profilecard-socials-link">
          <img src={twitter} alt="" />
        </a>
        <a href={socialsLinks[1]} className="profilecard-socials-link">
          <img src={instagram} alt="" />
        </a>
        <a href={socialsLinks[0]} className="profilecard-socials-link">
          <img src={facebook} alt="" />
        </a>
      </span>
    </div>
  );
};

export default ProfileCard;
