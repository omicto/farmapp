import React from "react";
import { Typography, Card } from "@material-ui/core";
import { Link } from "react-router-dom";

const categories = [
  "Medicina para el resfrío",
  "Cuidado de la piel",
  "Suplementos",
];

const Home = () => (
  <div className="home">
    <div className="header">
        <h4 className="rcw-title">Inicio</h4>
      </div>
    <div>
      <h3 className="m-3">Explora nuestras categorías</h3>
      {categories.map((c) => (
        <Card className="p-3 m-2">
          <Link to="/shop">
            <Typography variant="h5" key={c}>
              {c}
            </Typography>
          </Link>
        </Card>
      ))}
      <h3 className="m-3">Revisa tu carrito</h3>
      <Card className="p-3 m-2">
        <Link to="/cart">
          {" "}
          <Typography variant="button">Ir al carrito...</Typography>
        </Link>
      </Card>
    </div>
  </div>
);

export default Home;
