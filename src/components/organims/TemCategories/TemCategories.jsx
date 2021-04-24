import React from "react";
import PropTypes from "prop-types";

import "./temcategories.css";

const TemCategories = ({ children }) => {
  return <div className="categories">{children}</div>;
};

TemCategories.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TemCategories;
