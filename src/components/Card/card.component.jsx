import React from "react";

import "./card.styles.scss";

const Card = ({ image, title, date, text }) => {
  return (
    <div className="card">
      <img src={image} alt={title || "card image"} className="card-image" />
      <h2 className="card-title">{title || "Card Title"}</h2>
      <span className="card-date">{date || "21/08/2020"}</span>
      <p className="card-text">
        {text ||
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis pellentesque leo, ac congue orci lacinia sed."}
      </p>
    </div>
  );
};

export default Card;
