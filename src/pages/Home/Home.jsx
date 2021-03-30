import React from "react";

import { connect } from "react-redux";

import Heading from "../../components/atoms/Heading";
import Paragraph from "../../components/atoms/Paragraph";
import Category from "../../components/molecules/Category";
import TemCategories from "../../components/organims/TemCategories";

const Home = ({ categories }) => {
  return (
    <section className="wrapper">
      <Heading>Home</Heading>
      <Paragraph>
        Arma la patineta que siempre has soñado, personaliza eligiendo cada una
        de sus partes y pasea por la vida en tu sector 9.
      </Paragraph>

      <TemCategories>
        {categories.map((category) => (
          <Category
            key={category.name}
            alt={category.name}
            link={`/categories/${category.name}`}
            {...category}
          />
        ))}
      </TemCategories>
    </section>
  );
};

const mapStateToProps = ({ CategoriesReducer }) => CategoriesReducer;

export default connect(mapStateToProps)(Home);
