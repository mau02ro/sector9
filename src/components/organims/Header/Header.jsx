import React from "react";
import { Link } from "react-router-dom";
import { withRouter, useLocation } from "react-router";
import classNames from "classnames";

// Components
import Image from "../../atoms/Image";
import IconsHeader from "../../molecules/IconsHeader";

import "./header.css";

const Header = ({ history: { goBack }, location: { pathname }, openMenu }) => {
  return (
    <header
      className={classNames("header", {
        header_ligth: pathname.includes("/product/"),
      })}
    >
      <div className="wrapper">
        {pathname !== "/" ? (
          <span onClick={goBack} className="header_goBack">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/icon%2Farrow.svg?alt=media&token=f7ed69f0-d3e2-4771-b5ce-07f94efdf035"
              alt="Arrow"
              maxWidth="10px"
            />
            Volver
          </span>
        ) : (
          <Link to="/">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/logos%2Fsmall.png?alt=media&token=9384109f-8c79-4d4a-a885-bb7c6e4f2827"
              alt="Logo"
              maxWidth="80px"
            />
          </Link>
        )}
        <IconsHeader openMenu={openMenu} />
      </div>
    </header>
  );
};

export default withRouter(Header);
