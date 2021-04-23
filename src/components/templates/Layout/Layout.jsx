import React, { useState, useEffect } from "react";

import Header from "../../organims/Header";
import Onboarding from "../Onboarding";
import Menu from "../../organims/Menu";

import "./layout.css";

const Layout = ({ children }) => {
  const [visited, setVisited] = useState(false);
  const [controllerMenu, setControllerMenu] = useState(false);

  const handleVisited = () => {
    setVisited(true);
  };

  return (
    <div className="layout">
      <Header openMenu={() => setControllerMenu(true)} />

      <div className="">{children}</div>

      <Menu open={controllerMenu} close={() => setControllerMenu(false)} />
      {!visited && <Onboarding setVisited={handleVisited} />}
    </div>
  );
};

export default Layout;
