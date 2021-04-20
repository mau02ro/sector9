import React from "react";

import Image from "../../atoms/Image";
import Heading from "../../atoms/Heading";

import "./CartCard.css";

const CartCard = ({ id, images, name, price, children }) => {
  return (
    <div className="cartCard">
      {children && (
        <span onClick={() => console.log(id)} className="cartCard_icon">
          {children}
        </span>
      )}
      <div className="cartCard_image">
        <Image src={images[0]} maxWidth="89px" alt={name} />
      </div>
      <div className="cartCard_content">
        <Heading type="secondary">{name}</Heading>
        <Heading type="secondary-two">$ {price} USD</Heading>
      </div>
    </div>
  );
};

export default CartCard;
