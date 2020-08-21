import React from "react";

import Button from "../Button/button.component";

import "./cta.styles.scss";

const CallToActionContainer = ({ title, text, buttonText }) => {
  return (
    <div className="cta">
      <h3 className="cta-title">{title || "Call To Action"}</h3>
      <p className="cta-text">
        {text ||
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis pellentesque leo, ac congue orci lacinia sed."}
      </p>
      <Button buttonText={buttonText} />
    </div>
  );
};

export default CallToActionContainer;
