import React from "react";
import PropTypes from "prop-types";

import Heading from "../../atoms/Heading";
import Paragraph from "../../atoms/Paragraph";

import "./productFeatures.css";

function firstLetterUppercase(string) {
  const chart = string.charAt(0).toUpperCase();
  const moreString = string.substring(1, string.length);
  return chart.concat(moreString);
}

const ProductFeatures = ({ about }) => {
  return (
    <div className="productFeatures">
      {about.map((item) => {
        if (Array.isArray(item.value)) {
          return (
            <div className="productFeatures_card" key={item.title}>
              <Heading type="secondary">{item.title}</Heading>
              <div className="">
                {item.value.map((subItem) => (
                  <Paragraph key={subItem.key}>
                    {`${firstLetterUppercase(subItem.key)}}: ${subItem.value}`}
                  </Paragraph>
                ))}
              </div>
            </div>
          );
        } else {
          return (
            <div className="productFeatures_card" key={item.title}>
              <Heading type="secondary">{item.title}</Heading>
              <Paragraph>{item.value}</Paragraph>
            </div>
          );
        }
      })}
    </div>
  );
};

ProductFeatures.propTypes = {
  about: PropTypes.array.isRequired,
};

export default ProductFeatures;
