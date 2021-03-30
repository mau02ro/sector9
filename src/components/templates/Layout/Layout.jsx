import React, { useState, useEffect } from "react";

import Header from "../../organims/Header";
import Onboarding from "../Onboarding";

import "./layout.css";

const Layout = ({ children }) => {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(true);
  };

  return (
    <div className="layout">
      <Header />
      <div className="">{children}</div>
      {/* {!visited && <Onboarding setVisited={handleVisited} />} */}
    </div>
  );
};

export default Layout;
