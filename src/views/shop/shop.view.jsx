import React from "react";
import Shelf from "../../components/shelf/shelf.component";

const Shop = ({ items }) => {
  return (
    <div >
      <div className="header">
        <h4 className="rcw-title">Farmacias FarmApp</h4>
      </div>
      <Shelf items={items}></Shelf>
    </div>
  );
};

export default Shop;
