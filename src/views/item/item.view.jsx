import React, { useState, useContext } from "react";
import ItemCarousel from "../../components/item-carousel/item-carousel.component";
import QuantitySelect from "../../components/quantity-select/quantity-select.component";
//  import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CardActions, CardContent, Card, Typography } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import { getItemWithId } from "../../services/item.service";
import { AppContext } from "../../components/context/app-context.component";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00897C",
    },
  },
});

const asMoney = (money) => money.toFixed(2);
const ItemView = () => {
  const history = useHistory();
  const { dispatch } = useContext(AppContext);

  const addToCart = (item, qty) => {
    dispatch({ type: "ADD_TO_CART", payload: { item, quantity: qty } });
    history.push("/cart");
  };

  const { id } = useParams();
  const [itemQty, setItemQty] = useState(1);
  const item = getItemWithId(id);
  const { images, name, description, brand, unitPrice } = item;

  return (
    <div className="h-100">
      <ItemCarousel items={images}></ItemCarousel>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            <span className="font-weight-bold">{name}</span> | {brand}
          </Typography>
          <p>{description}</p>
        </CardContent>
        <CardActions>
          <div className="container">
            <div className="row m-2">
              <div className="col">
                <QuantitySelect
                  onChange={(q) => setItemQty(q)}
                ></QuantitySelect>
              </div>
              <div className="col">
                <span>${asMoney(unitPrice * itemQty)}</span>
              </div>
            </div>
            <div className="row">
              <ThemeProvider theme={theme}>
                <Button className="w-100" variant="contained" color="primary" onClick={() => addToCart(item, itemQty)}>
                  Añadir al carrito
                </Button>
              </ThemeProvider>
            </div>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default ItemView;
