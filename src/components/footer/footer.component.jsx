import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Storefront from "@material-ui/icons/Storefront";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd, faFlask, faUser } from "@fortawesome/free-solid-svg-icons";

import { BottomNavigationAction, BottomNavigation } from "@material-ui/core";

const Footer = () => {
  const history = useHistory();
  const [current, setCurrent] = useState("");
  return (
    <BottomNavigation
      value={current}
      onChange={(event, newPath) => {
        setCurrent(newPath);
        history.push(`/${newPath}`);
      }}
      showLabels
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
