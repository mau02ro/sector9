import React from "react";
import PropTypes from "prop-types";

import "./paragraph.css";

const Paragraph = ({ children }) => {
  return <p className="paragraph">{children}</p>;
};

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Paragraph;
