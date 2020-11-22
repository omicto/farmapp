import React from "react";
import ShelfContainer from "./shelf-container.component";
import {ReactComponent as Bottle} from "./bottle.svg";
import ShelfItem from "./shelf-item.component";

const Shelf = ({ items }) => {
  return (
    <ShelfContainer>
      {items.map(item => <ShelfItem key={item.id} item={item} />)}
    </ShelfContainer>
  );
};

export default Shelf;
