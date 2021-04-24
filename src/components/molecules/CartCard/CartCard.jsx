import React from "react";
import PropTypes from "prop-types";

import Image from "../../atoms/Image";
import Heading from "../../atoms/Heading";

import "./CartCard.css";

const CartCard = ({ image, name, price, children, actionIcon }) => {
  return (
    <div className="cartCard">
      {children && (
        <span onClick={actionIcon && actionIcon} className="cartCard_icon">
          {children}
        </span>
      )}
      <div className="cartCard_image">
        <Image src={image} maxWidth="89px" alt={name} />
      </div>
      <div className="cartCard_content">
        <Heading type="secondary">{name}</Heading>
        <Heading type="secondary-two">$ {price} USD</Heading>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  children: PropTypes.element,
  actionIcon: PropTypes.func,
};

export default CartCard;
