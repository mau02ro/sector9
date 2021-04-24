import React, { useState } from "react";
import PropTypes from "prop-types";

import Header from "../../organims/Header";
import Onboarding from "../Onboarding";
import Menu from "../../organims/Menu";

import "./layout.css";

const Layout = ({ children }) => {
  const [visited, setVisited] = useState(false);
  const [controllerMenu, setControllerMenu] = useState(false);

  return (
    <div className="layout">
      <Header openMenu={() => setControllerMenu(true)} />
      <Menu open={controllerMenu} close={() => setControllerMenu(false)} />
      <div className="layout_content">{children}</div>
      {/* {!visited && <Onboarding setVisited={() => setVisited(true)} />} */}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
