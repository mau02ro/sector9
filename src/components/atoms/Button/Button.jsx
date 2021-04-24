import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./button.css";

const Button = ({ children, action, type }) => {
  return (
    <button type="button" className={`button button-${type}`} onClick={action}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: "primary",
};

const Button_Link = ({ href, children, type = "primary" }) => {
  return (
    <Link to={href} className={`button button-${type}`}>
      {children}
    </Link>
  );
};

Button_Link.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Button_Link.defaultProps = {
  type: "primary",
};

Button.Link = Button_Link;

export default Button;
