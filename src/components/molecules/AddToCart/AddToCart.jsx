import React from "react";

import Image from "../../atoms/Image";
import Button from "../../atoms/Button";
import Heading from "../../atoms/Heading";

import "./AddToCart.css";

const AddToCart = ({ name, price, images }) => {
  return (
    <div>
      <div className="addToCart_content">
        <span className="addToCart_header">
          <Image
            maxWidth="18px"
            src="https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/icon%2Fcheck-yellow.svg?alt=media&token=a1098faf-d797-4708-899c-6ec5929df292"
          />
          <Heading type="secondary">agregado al carrito</Heading>
        </span>
        <div className="addToCart_product">
          <span>
            <Image maxWidth="89px" src={images[0]} />
          </span>
          <div className="">
            <Heading type="secondary">{name}</Heading>
            <Heading type="secondary-two">$ {price} USD</Heading>
          </div>
        </div>
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

export default AddToCart;
