import React from "react";
import PropTypes from "prop-types";

import Image from "../../atoms/Image";
import Button from "../../atoms/Button";
import Heading from "../../atoms/Heading";
import CartCard from "../CartCard";

import "./AddToCart.css";

const AddToCart = ({ name, price, images }) => {
  return (
    <div>
      <div className="addToCart_content">
        <span className="addToCart_header">
          <Image
            maxWidth="18px"
            alt="Check"
            src="https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/icon%2Fcheck-yellow.svg?alt=media&token=a1098faf-d797-4708-899c-6ec5929df292"
          />
          <Heading type="secondary">agregado al carrito</Heading>
        </span>

        <CartCard name={name} price={price} images={images} />
      </div>
      <div className="addToCart_buttons">
        <Button.Link href="/shopping-cart">carrito y caja</Button.Link>
        <Button.Link href="/" type="outline">
          seguir comprando
        </Button.Link>
      </div>
    </div>
  );
};

AddToCart.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
};

export default AddToCart;
