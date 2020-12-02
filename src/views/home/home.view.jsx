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
        <h5 style={{color: 'white'}}><strong>Explora nuestras categorías</strong></h5>
      </div>
    <div>
      
      {categories.map((c, index) => (
        <Card className="p-3 m-2" key={index}>
          <Link to="/shop">
            <Typography variant="h5" key={c}>
              {c}
            </Typography>
          </Link>
        </Card>
      ))}
      <div className="header">
        <h4 className="rcw-title">Revisa tu carrito
        </h4>
      </div>
      
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
