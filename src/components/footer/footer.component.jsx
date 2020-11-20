import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Storefront from "@material-ui/icons/Storefront";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd, faFlask } from "@fortawesome/free-solid-svg-icons";

import {
  BottomNavigationAction,
  BottomNavigation,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
});

const Footer = () => {
  const classes = useStyles();
  const history = useHistory();
  const [current, setCurrent] = useState("");
  return (
    <BottomNavigation
      value={current}
      onChange={(event, newPath) => {
        setCurrent(newPath);
        history.push(`/${newPath}`);
      }}
      className = {classes.stickToBottom}
    >
      <BottomNavigationAction label="Inicio" value="" icon={<HomeIcon />} />
      <BottomNavigationAction
        label="Laboratorios"
        value="labs"
        icon={<FontAwesomeIcon icon={faFlask} />}
      />
      <BottomNavigationAction
        label="Farmacias"
        value="shop"
        icon={<Storefront />}
      />
      <BottomNavigationAction
        label="Carrito"
        value="cart"
        icon={<ShoppingCartIcon />}
      />
      <BottomNavigationAction
        label="Ayuda"
        value="chat"
        icon={<FontAwesomeIcon icon={faUserMd} />}
      />
    </BottomNavigation>
  );
};

export default Footer;
