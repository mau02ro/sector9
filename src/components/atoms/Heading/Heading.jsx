import React from "react";

import "./heading.css";

const Heading = ({ children, type = "primary" }) => {
  return <h2 className={`heading heading-${type}`}>{children}</h2>;
};

export default Heading;
