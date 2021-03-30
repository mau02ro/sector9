import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

import Heading from "../../components/atoms/Heading";
import Paragraph from "../../components/atoms/Paragraph";
import Category from "../../components/molecules/Category";
import TemCategories from "../../components/organims/TemCategories";

const Categories = ({ match: { params }, categories }) => {
  const [category, setCategory] = useState({});

  useEffect(() => {
    let data = categories.filter((item) => item.name === params.category);
    setCategory(data[0]);
  }, []);

  return (
    <section className="wrapper">
      {category.name && <Heading>{category.name}</Heading>}
      {category.description && <Paragraph>{category.description}</Paragraph>}
      {category.subCategories && (
        <TemCategories>
          {category.subCategories.map((subCategory) => (
            <Category
              key={subCategory.name}
              alt={subCategory.name}
              link={`/catalogue/${category.name}/${subCategory.name}`}
              {...subCategory}
            />
          ))}
        </TemCategories>
      )}
    </section>
  );
};

const mapStateToProps = ({ CategoriesReducer }) => CategoriesReducer;

export default connect(mapStateToProps)(Categories);
