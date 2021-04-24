import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import Image from "../../atoms/Image";

import "./productImage.css";

const ProductImage = ({ images, name }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="productImage">
      <Image src={images[index]} alt={`Product - ${name}`} />
      <div className="productImage_options">
        {images.length > 1 &&
          images.map((image, key) => (
            <div
              className={classNames("productImage_item", {
                "productImage_item-active": key === index,
              })}
              key={`productImage_options-${key}`}
              onClick={() => setIndex(key)}
            >
              <Image src={image} alt={`Product - ${name}`} />
            </div>
          ))}
      </div>
    </div>
  );
};

ProductImage.propTypes = {
  images: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default ProductImage;
