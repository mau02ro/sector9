import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Heading from "../../components/atoms/Heading";
import CartCard from "../../components/molecules/CartCard";
import Image from "../../components/atoms/Image";

import "./ShoppingCart.css";

const ShoppingCart = ({ shoppingCart, products }) => {
  console.log(shoppingCart);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let data = products.filter((item) => shoppingCart.includes(item.id));
    let costo = 0;

    data.forEach((item) => (costo += parseFloat(item.price)));

    setCart(data);
    setTotal(costo);
  }, [shoppingCart]);

  return (
    <section className="wrapper">
      <Heading>carrito de compras</Heading>
      <div className="shoppingCart_info">
        <Heading type="secondary">{shoppingCart.length} productos</Heading>
        <Heading type="primary-two">$ {total} USD</Heading>
      </div>
      <div className="shoppingCart_grid">
        {cart.map((product, key) => (
          <CartCard key={`${key}-${product.name}`} {...product}>
            <Image src="https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/icon%2Ftrash.svg?alt=media&token=4252bef2-abe0-409e-95f2-461bbe666446" />
          </CartCard>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = ({
  AppReducer: { shoppingCart },
  ProductReducer: { products },
}) => ({ shoppingCart, products });

export default connect(mapStateToProps)(ShoppingCart);
