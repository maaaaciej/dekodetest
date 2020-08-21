import React from "react";

import Card from "../Card/card.component";

import left from "../../assets/arrows/left.svg";
import right from "../../assets/arrows/right.svg";

//All of the information given in the wireframe
import data from "../../assets/data/data.static";

import "./cardcontainer.styles.scss";

const CardContainer = () => {
  const cards = data.cardCarousel;

  return (
    <div className="cardcontainer">
      <img src={left} alt="left arrow" />
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          date={card.date}
          text={card.text}
        />
      ))}
      <img src={right} alt="right arrow" />
    </div>
  );
};

export default CardContainer;
