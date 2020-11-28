import React, { useContext } from "react";
import { AppContext } from "../../components/context/app-context.component";
// import { Typography } from "@material-ui/core";

const Cart = () => {
  const { state: {cart} } = useContext(AppContext);

  return (
    <div className="cart-header">
      <h4 className="rcw-title">Carrito de compra</h4>
      {/* Do something with the items in cart*/}
      {cart.map(({item, quantity}) => <>{item.name}</>)}
    </div>
  );
};

export default Cart;
