import React from "react";

import "./button.css";

const Button = ({ children, action }) => {
  return (
    <button type="button" className="button" onClick={action}>
      {children}
    </button>
  );
};

export default Button;
