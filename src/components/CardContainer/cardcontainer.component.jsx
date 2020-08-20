import React from "react";

import Card from "../Card/card.component";

import "./cardcontainer.styles.scss";

const CardContainer = () => {
  return (
    <div className="cardcontainer">
      Card Container
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardContainer;
