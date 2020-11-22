import React from "react";
import ShelfContainer from "./shelf-container.component";
import ShelfItem from "./shelf-item.component";

const Shelf = ({ items }) => {
  return (
    <div>
      <h2 className="mt-3">Farmacias FarmApp</h2>
      <ShelfContainer>
        {items.map((item) => (
          <ShelfItem key={item.id} item={item} />
        ))}
      </ShelfContainer>
      <ShelfContainer>
        {items.map((item) => (
          <ShelfItem key={item.id} item={item} />
        ))}
      </ShelfContainer>
      <ShelfContainer>
        {items.map((item) => (
          <ShelfItem key={item.id} item={item} />
        ))}
      </ShelfContainer>
      <ShelfContainer>
        {items.map((item) => (
          <ShelfItem key={item.id} item={item} />
        ))}
      </ShelfContainer>
    </div>
  );
};

export default Shelf;
