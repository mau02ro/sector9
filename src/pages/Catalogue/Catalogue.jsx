import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Heading from "../../components/atoms/Heading";
import Paragraph from "../../components/atoms/Paragraph";
import Button from "../../components/atoms/Button";
import Product from "../../components/molecules/Product";
import TemCatalogue from "../../components/organims/TemCatalogue";

import "./Catalogue.css";

const Catalogue = ({
  match: { params },
  history: { goBack },
  CategoriesReducer: { categories },
  ProductReducer: { products },
}) => {
  const [category, setCategory] = useState({});
  const [productsData, setProducts] = useState([]);

  useEffect(() => {
    let c_data, p_data;

    categories.forEach(({ subCategories, name }) => {
      if (name === params.product) {
        subCategories.forEach((item) => {
          if (item.name === params.category) {
            c_data = item;
          }
        });
      }
    });

    p_data = products.filter(
      (item) =>
        item.product === params.product && item.category === params.category
    );

    setCategory(c_data);
    setProducts(p_data);
  }, []);

  return (
    <section className="catalogue wrapper">
      {category.name && (
        <React.Fragment>
          <Heading>{category.name}</Heading>
          <Paragraph>{category.description}</Paragraph>
        </React.Fragment>
      )}
      {productsData.length ? (
        <TemCatalogue>
          {productsData.map((item, key) => (
            <Product
              key={`${item.product}-${item.category}-${key}`}
              {...item}
            />
          ))}
        </TemCatalogue>
      ) : (
        <div className="catalogue_alert">
          <Heading type="tertiary">No hay invertadio DISPONIBLE.</Heading>
          <Button action={goBack}>Regresar</Button>
        </div>
      )}
    </section>
  );
};

Catalogue.propTypes = {
  params: PropTypes.node,
  goBack: PropTypes.func,
  categories: PropTypes.array,
  products: PropTypes.array,
};

const mapStateToProps = ({ CategoriesReducer, ProductReducer }) => {
  return {
    ProductReducer,
    CategoriesReducer,
  };
};

export default connect(mapStateToProps, null)(Catalogue);
