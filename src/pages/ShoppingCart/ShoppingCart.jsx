import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Heading from "../../components/atoms/Heading";
import CartCard from "../../components/molecules/CartCard";
import Image from "../../components/atoms/Image";
import Button from "../../components/atoms/Button";
import CartOperations from "../../components/templates/CartOperations";

import { removeToCart } from "../../actions/shoppingCartActions";

import "./ShoppingCart.css";

const ShoppingCart = ({ shoppingCart, removeToCart }) => {
  const [total, setTotal] = useState(0);
  const [indexProduct, setIndexProduct] = useState(null);

  useEffect(() => {
    let costo = 0;

    shoppingCart.forEach((item) => (costo += parseFloat(item.price)));

    setTotal(costo);
  }, [shoppingCart]);

  const handleRemoveToCart = () => {
    removeToCart(indexProduct);
    setIndexProduct(null);
  };

  const handlePay = () => {
    alert(":)");
  };

  return (
    <section className="wrapper shoppingCart">
      <Heading>carrito de compras</Heading>
      <div className="shoppingCart_info">
        <Heading type="secondary">{`${shoppingCart.length} productos`}</Heading>
        <Heading type="primary-two">{`$ ${total} USD`}</Heading>
      </div>

      <span className="shoppingCart_line"></span>

      {shoppingCart.length === 0 ? (
        <div className="shoppingCart_not">
          <span>No hay elementos del carrito</span>

          <Button.Link href="/">ir catalogo</Button.Link>
        </div>
      ) : (
        <React.Fragment>
          <div className="shoppingCart_grid">
            {shoppingCart.map((product, key) => (
              <CartCard
                key={`${key}-${product.name}`}
                actionIcon={() => setIndexProduct(key)}
                image={product.images[0]}
                name={product.name}
                price={product.price}
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/icon%2Ftrash.svg?alt=media&token=4252bef2-abe0-409e-95f2-461bbe666446"
                  alt="Papelera - Icon"
                  maxWidth="18px"
                />
              </CartCard>
            ))}
          </div>

          <div className="shoppingCart_pay">
            <Button action={handlePay}>
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/icon%2Fpaypal.svg?alt=media&token=dea9942a-8e9d-4715-9006-686510840bbb"
                alt="Logo PayPal"
                maxWidth="18px"
              />
              pagar con paypal
            </Button>
          </div>

          {indexProduct !== null && (
            <CartOperations
              className="shoppingCart_modal"
              controller={indexProduct !== null}
              close={() => setIndexProduct(null)}
            >
              <CartCard
                image={shoppingCart[indexProduct].images[0]}
                name={shoppingCart[indexProduct].name}
                price={shoppingCart[indexProduct].price}
              />
              <Button type="danger" action={handleRemoveToCart}>
                Eliminar
              </Button>
            </CartOperations>
          )}
        </React.Fragment>
      )}
    </section>
  );
};

ShoppingCart.propTypes = {
  shoppingCart: PropTypes.array,
  removeToCart: PropTypes.func.isRequired,
};

ShoppingCart.defaultProps = {
  shoppingCart: [],
};

const mapStateToProps = ({ AppReducer }) => AppReducer;
const mapDispatchToProps = {
  removeToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
