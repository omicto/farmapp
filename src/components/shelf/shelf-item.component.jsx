import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Bottle } from "./bottle.svg";

const ShelfItem = ({ item }) => {
  return (
    <div>
      <Link to={`/shop/${item.id}`}>
        <Bottle />
      </Link>
    </div>
  );
};

export default ShelfItem;
