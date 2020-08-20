import React from "react";

import "./card.styles.scss";

const Card = ({ image, title, date, text }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <span className="card-date">{date}</span>
      <p className="card-text">{text}</p>
    </div>
  );
};

export default Card;
