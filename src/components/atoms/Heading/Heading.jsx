import React from "react";
import PropTypes from "prop-types";

import "./Heading.css";

const Heading = ({ children, type, className }) => {
  return <h2 className={`heading heading-${type} ${className}`}>{children}</h2>;
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    "primary",
    "primary-two",
    "secondary",
    "secondary-two",
    "tertiary",
  ]),
  className: PropTypes.string,
};

Heading.defaultProps = {
  type: "primary",
  className: "",
};

export default Heading;
