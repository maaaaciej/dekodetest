import React from "react";

import Card from "../Card/card.component";

import image1 from "../../assets/card-images/1.svg";
import image2 from "../../assets/card-images/2.svg";
import image3 from "../../assets/card-images/3.svg";

import "./cardcontainer.styles.scss";

const CardContainer = () => {
  const cards = [
    {
      image: image1,
      title: "Lorem ipsum",
      date: "17. august 2020",
      text:
        "In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum.",
    },
    {
      image: image2,
      title: "Lorem ipsum",
      date: "17. august 2020",
      text:
        "In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum.",
    },
    {
      image: image3,
      title: "Lorem ipsum",
      date: "17. august 2020",
      text:
        "In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum.",
    },
  ];

  return (
    <div className="cardcontainer">
      {cards.map((card) => (
        <Card
          key={card.title}
          image={card.image}
          title={card.title}
          date={card.date}
          text={card.text}
        />
      ))}
    </div>
  );
};

export default CardContainer;
