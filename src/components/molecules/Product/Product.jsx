import React from "react";
import { Link } from "react-router-dom";

import Image from "../../atoms/Image";
import Heading from "../../atoms/Heading";

import "./product.css";

const Product = ({ images, name, id }) => {
  return (
    <Link to={`/product/${id}`} className="product_card">
      <div className="product_card-image">
        <Image src={images[0]} maxWidth="140px" />
      </div>
      <Heading type="tertiary">{name}</Heading>
    </Link>
  );
};

export default Product;
