import React, { useState } from "react";
import classNames from "classnames";

import Image from "../../atoms/Image";

import "./productImage.css";

const ProductImage = ({ images }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="productImage">
      <Image src={images[index]} />
      {console.log(images)}
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
              <Image src={image} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductImage;
