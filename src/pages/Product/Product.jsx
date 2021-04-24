import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Paragraph from "../../components/atoms/Paragraph";
import Heading from "../../components/atoms/Heading";
import ProductFeatures from "../../components/molecules/ProductFeatures";
import ProductImage from "../../components/molecules/ProductImage";
import Button from "../../components/atoms/Button";
import CartOperations from "../../components/templates/CartOperations";
import AddToCart from "../../components/molecules/AddToCart";

import { addToCart } from "../../actions/shoppingCartActions";

import "./product.css";

const Product = ({ match: { params }, products, addToCart }) => {
  const [product, setProduct] = useState({});
  const [controllCartOperations, setCartOperations] = useState(false);

  useEffect(() => {
    let pro = products.filter(
      (item) => parseInt(item.id) === parseInt(params.id)
    )[0];
    setProduct(pro);
  }, []);

  const handleAddToCart = () => {
    addToCart(product.id);
    setCartOperations(true);
  };

  return (
    <Fragment>
      {product.id !== undefined && (
        <div className="pProduct">
          <div className="pProduct_image">
            <ProductImage images={product.images} name={product.name} />
          </div>
          <div className="wrapper">
            <div className="pProduct_head">
              <Heading className="pProduct_head-title">{product.name}</Heading>
              <Heading type="primary-two">{`$ ${product.price} USD`}</Heading>
            </div>
            {product.description && (
              <Paragraph>{product.description}</Paragraph>
            )}
            <ProductFeatures about={product.about} />
            <Button action={handleAddToCart}>Añadir al carrito</Button>
          </div>
          <CartOperations
            controller={controllCartOperations}
            close={() => setCartOperations(false)}
          >
            <AddToCart
              name={product.name}
              price={product.price}
              images={product.images}
            />
          </CartOperations>
        </div>
      )}
    </Fragment>
  );
};

Product.propTypes = {
  params: PropTypes.node,
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
};

const mapStateToProps = ({ ProductReducer }) => ProductReducer;
const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
