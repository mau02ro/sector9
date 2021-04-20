import React from "react";

import Heading from "../../components/atoms/Heading";

const ShoppingCart = () => {
  return (
    <section className="wrapper">
      <Heading>carrito de compras</Heading>
      <div className="shoppingCart_info">
        <Heading type="secondary">4 productos</Heading>
        <Heading type="primary-two">$ 150.00 USD</Heading>
      </div>
    </section>
  );
};

export default ShoppingCart;
