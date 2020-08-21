import React from "react";

import "./button.styles.scss";

const Button = ({ buttonText }) => {
  return (
    <div className="button">
      <button className="button-button">{buttonText || "Click Me"}</button>
    </div>
  );
};

export default Button;
