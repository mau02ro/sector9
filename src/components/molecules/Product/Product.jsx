import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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

Product.propTypes = {
  images: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Product;
