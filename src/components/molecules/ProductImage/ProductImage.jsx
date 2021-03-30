import React, { useState } from "react";

import Image from "../../atoms/Image";

const ProductImage = ({ images }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <Image src={images[index]} />
      {console.log(images)}
      <div className=""></div>
    </div>
  );
};

export default ProductImage;
