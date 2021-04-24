import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import Image from "../../atoms/Image";

import "./CartOperations.css";

const CartOperations = ({ children, className, controller, close }) => {
  if (!controller) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={`cartOperations ${className}`}>
      <div className="cartOperations_content">
        <span className="cartOperations_close" onClick={close}>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/sector9-f542b.appspot.com/o/icon%2Fclose.svg?alt=media&token=1684597c-e04c-4a04-afdb-15cbb30a4bae"
            alt="Close"
            maxWidth="18px"
          />
        </span>
        {children}
      </div>
    </div>,
    document.getElementById("cartOperations")
  );
};

CartOperations.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  controller: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

CartOperations.defaultProps = {
  className: "",
};

export default CartOperations;
