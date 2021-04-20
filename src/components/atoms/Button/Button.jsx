import React from "react";
import { Link } from "react-router-dom";

import "./button.css";

const Button = ({ children, action, type = "primary" }) => {
  return (
    <button type="button" className={`button button-${type}`} onClick={action}>
      {children}
    </button>
  );
};

const Button_Link = ({ href = "#", children, type = "primary" }) => {
  return (
    <Link to={href} className={`button button-${type}`}>
      {children}
    </Link>
  );
};

Button.Link = Button_Link;

export default Button;
