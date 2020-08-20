import React from "react";

import "./button.styles.scss";

const Button = ({ buttonText }) => {
  return (
    <div className="button">
      <button>{buttonText}</button>
    </div>
  );
};

export default Button;
