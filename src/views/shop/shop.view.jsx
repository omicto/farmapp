import React from "react";
import Shelf from "../../components/shelf/shelf.component";

const Shop = ({ items }) => {
  return (
    <div>
      <h2 className="mt-3">Farmacias FarmApp</h2>
      <Shelf items={items}></Shelf>
    </div>
  );
};

export default Shop;
