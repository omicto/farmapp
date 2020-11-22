import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Bottle } from "./bottle.svg";

const ShelfItem = ({ item }) => {
  return (
    <Link to={`/shop/${item.id}`}>
      <Bottle />
    </Link>
  );
};

export default ShelfItem;
