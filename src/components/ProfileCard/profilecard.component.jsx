import React from "react";

import facebook from "../../assets/socials/facebook.svg";
import instagram from "../../assets/socials/instagram.svg";
import twitter from "../../assets/socials/twitter.svg";

import "./profilecard.styles.scss";

const ProfileCard = ({
  author: { avatar, readtime, name, date, position, socials },
}) => {
  // const { avatar, readtime, name, date, position, socials } = author;

  return (
    <div className="profilecard">
      {avatar ? <img src={avatar} alt={`${name || "avatar"}`} /> : null}
      <div className="profilecard-container">
        <h4 className="profilecard-container-name">{`${name || "Name"}`}</h4>
        <p className="profilecard-container-text">{`${
          position || "Position"
        } - ${readtime || "Readtime"} min read - ${date || "21/08/2020"}`}</p>

        <span className="profilecard-container-socials">
          {/* The three expressions below conditionally render the social media icons, based on wether or not the links are provided */}
          {socials.Twitter ? (
            <a
              href={socials.Twitter}
              className="profilecard-container-socials-link"
            >
              <img
                className="profilecard-container-socials-link-icon"
                src={twitter}
                alt=""
              />
            </a>
          ) : null}
          {socials.Instagram ? (
            <a
              href={socials.Instagram}
              className="profilecard-container-socials-link"
            >
              <img
                className="profilecard-container-socials-link-icon"
                src={instagram}
                alt=""
              />
            </a>
          ) : null}
          {socials.Facebook ? (
            <a
              href={socials.Facebook}
              className="profilecard-container-socials-link"
            >
              <img
                className="profilecard-container-socials-link-icon"
                src={facebook}
                alt=""
              />
            </a>
          ) : null}
        </span>
      </div>
    </div>
  );
};

export default ProfileCard;
