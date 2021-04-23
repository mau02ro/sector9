import React from "react";

import "./heading.css";

const Heading = ({ children, type = "primary", className = "" }) => {
  return <h2 className={`heading heading-${type} ${className}`}>{children}</h2>;
};

export default Heading;
