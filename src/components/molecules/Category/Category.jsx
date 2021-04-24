import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Image from "../../atoms/Image";

import "./category.css";

const Category = ({ name, image, link }) => {
  return (
    <Link to={link} className="category">
      <h3 className="category_name">{name}</h3>
      <Image src={image} alt={`Imagen ${name}`} maxWidth="101px" />
    </Link>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Category;
