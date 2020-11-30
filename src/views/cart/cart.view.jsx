import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../components/context/app-context.component";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const ccyFormat = (num) => `${num.toFixed(2)}`

const priceRow = (qty, unit) => qty * unit

const createRow = (desc, qty, unit) => {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

const subtotal = (items) => items.map(({ price }) => price).reduce((sum, i) => sum + i, 0)

const generateRows = (cart) => cart ? cart.map(({ item, quantity }) => createRow(`${item.brand} - ${item.name}`, quantity, item.unitPrice)) : [];

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00897C"
    },
  },
});

const Cart = () => {
  const { state: { cart } } = useContext(AppContext);
  const history = useHistory();
  return (
    <>
      <div className="header">
        <h4 className="rcw-title">Carrito de compra</h4>
      </div>
      <Paper className="cart-container">
        <TableContainer>
          <Table aria-label="spanning table" size="medium">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={3}>
                  Details
                </TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Desc</TableCell>
                <TableCell align="right">Qty.</TableCell>
                <TableCell align="right">Unit</TableCell>
                <TableCell align="right">Sum</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {generateRows(cart).map((row) => (
                <TableRow key={row.desc}>
                  <TableCell>{row.desc}</TableCell>
                  <TableCell align="right">{row.qty}</TableCell>
                  <TableCell align="right">{row.unit}</TableCell>
                  <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell align="right">{ccyFormat(subtotal(generateRows(cart)))}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <div className="spacer-mini" />
        <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary" onClick={() => history.push('/checkout')}>
            Comprar
          </Button>
        </ThemeProvider>
      </Paper>
    </>
  )
};

export default Cart;
