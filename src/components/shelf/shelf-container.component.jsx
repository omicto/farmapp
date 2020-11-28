import React from "react";
import "./shelf.styles.scss";

const ShelfContainer = ({ children }) => {
  return (
    <div className="shelf-container">
      <div className="row">{children}</div>
    </div>
  );
};

export default ShelfContainer;
