import React, { useState } from "react";

import Card from "../Card/card.component";

import left from "../../assets/arrows/left.svg";
import right from "../../assets/arrows/right.svg";

import "./cardcontainer.styles.scss";

const CardContainer = ({ cards }) => {
  //Using the useState-hook to keep track of the current x-offset.
  const [xOffset, setxOffset] = useState(0);
  /*The two functions below calculate the x-offset of the cards, based on the
  total number of cards given, making the component dynamic, as opposed to hardcoding a value.
  the "123" is the default offset value calculated based on the card width
  once all of the cards have been on screen,  the x-offset resets to the start.  */
  const previousCard = () => {
    xOffset >= 0
      ? setxOffset(-(cards.length / 3) * 123)
      : setxOffset(xOffset + 123);
  };
  const nextCard = () => {
    xOffset <= -(cards.length / 3) * 123
      ? setxOffset(0)
      : setxOffset(xOffset - 123);
  };

  return (
    <div className="cardcontainer">
      {/* in case of there only being 3 cards, we don't render the arrows. */}
      {cards.length <= 3 ? null : (
        <div className="cardcontainer-arrow">
          <img
            onClick={previousCard}
            id="left-arrow"
            src={left}
            alt="left arrow"
          />
        </div>
      )}
      <div className="cardcontainer-wrapper">
        {cards.map((card, index) => (
          <div
            key={index}
            className="cardcontainer-wrapper-card"
            style={{
              transform: `translateX(${xOffset}%)`,
            }}
          >
            <Card
              image={card.image}
              title={card.title}
              date={card.date}
              text={card.text}
            />
          </div>
        ))}
      </div>
      {cards.length <= 3 ? null : (
        <div className="cardcontainer-arrow">
          <img
            onClick={nextCard}
            id="right-arrow"
            src={right}
            alt="right arrow"
          />
        </div>
      )}
    </div>
  );
};

export default CardContainer;
