import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";

import Paragraph from "../../components/atoms/Paragraph";
import Heading from "../../components/atoms/Heading";
import ProductFeatures from "../../components/molecules/ProductFeatures";
import ProductImage from "../../components/molecules/ProductImage";
import Button from "../../components/atoms/Button";

import "./product.css";

const Product = ({ match: { params }, products }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    let pro = products.filter(
      (item) => parseInt(item.id) === parseInt(params.id)
    )[0];
    setProduct(pro);
  }, []);

  return (
    <Fragment>
      {product.id && (
        <div className="pProduct">
          <div className="pProduct_image">
            <ProductImage images={product.images} />
          </div>
          <div className="wrapper">
            <div className="pProduct_head">
              <Heading>{product.name}</Heading>
              <Heading type="primary-two">$ {product.price} USD</Heading>
            </div>
            <Paragraph>{product.description}</Paragraph>
            <ProductFeatures about={product.about} />
            {/* //TODO: añadir al carrito */}
            <Button action={() => console.log("añadir al carrito")}>
              Añadir al carrito
            </Button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = ({ ProductReducer }) => ProductReducer;

export default connect(mapStateToProps)(Product);
