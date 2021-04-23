import React from "react";
import className from "classnames";
import { Link } from "react-router-dom";

import Image from "../../atoms/Image";

import "./Menu.css";

const Menu = ({ open, close }) => {
  return (
    <section className={className("menu", { menu_open: open })}>
      <div className="menu_logo">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/logos%2Fsmall.png?alt=media&token=9384109f-8c79-4d4a-a885-bb7c6e4f2827"
          alt="Logo"
          maxWidth="80px"
        />
      </div>

      <nav>
        <ul className="menu_list">
          <li>
            <Link to="/" className="menu_link" onClick={close}>
              home
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/icon%2Farrow.svg?alt=media&token=f7ed69f0-d3e2-4771-b5ce-07f94efdf035"
                alt="Arrow"
                maxWidth="10px"
              />
            </Link>
          </li>
          <li>
            <Link to="/categories/tablas" className="menu_link" onClick={close}>
              tablas
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/icon%2Farrow.svg?alt=media&token=f7ed69f0-d3e2-4771-b5ce-07f94efdf035"
                alt="Arrow"
                maxWidth="10px"
              />
            </Link>
          </li>
          <li>
            <Link to="/categories/bases" className="menu_link" onClick={close}>
              bases
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/icon%2Farrow.svg?alt=media&token=f7ed69f0-d3e2-4771-b5ce-07f94efdf035"
                alt="Arrow"
                maxWidth="10px"
              />
            </Link>
          </li>
          <li>
            <Link
              to="/categories/llantas"
              className="menu_link"
              onClick={close}
            >
              llantas
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/icon%2Farrow.svg?alt=media&token=f7ed69f0-d3e2-4771-b5ce-07f94efdf035"
                alt="Arrow"
                maxWidth="10px"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Menu;
