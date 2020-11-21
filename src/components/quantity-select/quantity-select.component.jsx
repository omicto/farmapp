import React, { useState } from "react";
import "./quantity-select.styles.scss";

const QuantitySelect = ({ onChange, initialQty }) => {
  const [quantity, setQuantity] = useState(initialQty ? initialQty : 1);
  const dec = () => {
    const newQty = quantity - 1;
    handleChange(newQty);
  };

  const inc = () => {
    const newQty = quantity + 1;
    handleChange(newQty);
  };

  const handleChange = (qty) => {
    onChange(qty);
    setQuantity(qty);
  };

  return (
    <div>
      <button
        type="button"
        className="btn circular btn-secondary"
        onClick={dec}
        disabled={quantity === 1}>-</button>
      <span className="mx-3">{quantity}</span>
      <button type="button" className="btn circular btn-secondary"
       onClick={inc}>+</button>
    </div>
  );
};

export default QuantitySelect;
