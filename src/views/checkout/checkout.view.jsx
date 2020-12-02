import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { AppContext } from "../../components/context/app-context.component";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "90%",
    },
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00897C",
    },
  },
});
const Checkout = () => {
  const {
    state: { cart },
    dispatch,
  } = useContext(AppContext);
  const classes = useStyles();
  return (
    <>
      <div className="header">
        <h4 className="rcw-title">Pagar</h4>
      </div>
      <Paper className="cart-container">
        <div className="spacer-mini" />
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField id="nombre" label="Nombre" variant="outlined" />
          </div>
          <div>
            <TextField id="direccion" label="Dirección" variant="outlined" />
          </div>
          <div>
            <TextField
              id="num_tarjeta"
              label="Número de tarjeta"
              variant="outlined"
            />
          </div>
        </form>
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch({ type: "CLEARCART" })}
          >
            Pagar $ 
            {cart
              .map(({ item, quantity }) => item.unitPrice * quantity)
              .reduce((a, b) => a + b, 0.0)}
          </Button>
        </ThemeProvider>
      </Paper>
    </>
  );
};

export default Checkout;
