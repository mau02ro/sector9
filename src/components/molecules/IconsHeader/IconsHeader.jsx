import React from "react";

import { Link } from "react-router-dom";

import Image from "../../atoms/Image";

import "./IconsHeader.css";

const IconsHeader = ({ openMenu }) => {
  return (
    <div>
      <div className="iconsHeader_icons">
        <Link to="/shopping-cart">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/icon%2Fshopping-cart.svg?alt=media&token=e4d82c4f-cee5-4710-991d-46d2330e3305"
            alt="Shopping cart"
            maxWidth="18px"
          />
        </Link>
        <span onClick={openMenu}>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/icon%2Fmenu.svg?alt=media&token=8246042a-5f4f-4b3c-a578-8f923f5807da"
            alt="Shopping cart"
            maxWidth="18px"
          />
        </span>
      </div>
    </div>
  );
};

export default IconsHeader;
