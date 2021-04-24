import React from "react";
import PropTypes from "prop-types";

import "./image.css";

const Image = ({ src, alt, maxWidth }) => {
  return (
    <picture className="image" style={{ maxWidth }}>
      <img src={src} alt={alt} />
    </picture>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  maxWidth: PropTypes.string,
};

export default Image;
