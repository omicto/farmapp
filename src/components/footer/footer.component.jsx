import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { faUserMd, faFlask } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Storefront, Home, ShoppingCart } from "@material-ui/icons/";

const useStyles = makeStyles({
  root: {
    width: "100%",
    bottom: "0",
    position: "fixed",
  },
});

const Footer = () => {
  const classes = useStyles();
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);
  const history = useHistory();

  const handleNavigationChange = (e, newPath) => {
    history.push(newPath);
    setPath(newPath);
  };

  return (
    <BottomNavigation
      value={path}
      onChange={handleNavigationChange}
      className={classes.root}
    >
      <BottomNavigationAction icon={<Home />} value="/" />
      <BottomNavigationAction icon={<FontAwesomeIcon icon={faFlask} />} value="/labs"/>
      <BottomNavigationAction icon={<Storefront />} value="/shop" />
      <BottomNavigationAction icon={<ShoppingCart />} value="/cart" />
    </BottomNavigation>
  );
};

export default Footer;
