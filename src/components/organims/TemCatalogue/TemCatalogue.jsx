import React from "react";
import PropTypes from "prop-types";

import "./temCatalogue.css";

const TemCatalogue = ({ children }) => {
  return <div className="tem_catalogue">{children}</div>;
};

TemCatalogue.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TemCatalogue;
