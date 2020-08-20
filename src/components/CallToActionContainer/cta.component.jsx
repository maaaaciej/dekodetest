import React from "react";

import Button from "../Button/button.component";

import "./cta.styles.scss";

const CallToActionContainer = ({ title, text, buttonText }) => {
  return (
    <div className="cta">
      <h3 className="cta-title">{title}</h3>
      <p className="cta-text">{text}</p>
      <Button buttonText={buttonText} />
    </div>
  );
};

export default CallToActionContainer;
