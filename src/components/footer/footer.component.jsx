import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { faFlask } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Storefront, Home, ShoppingCart } from "@material-ui/icons/";

const useStyles = makeStyles({
  root: {
    width: "100%",
    bottom: "0",
    position: "fixed",
    zIndex: 10000
  },
});

const useActionStyles = makeStyles( {
  root:{
    "&$selected": {
      color: "#00897C"
    }
  },
  selected: {}
})

const Footer = ({onChange}) => {
  const classes = useStyles();
  const actionClasses = useActionStyles();
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);
  const history = useHistory();

  const handleNavigationChange = (e, newPath) => {
    history.push(newPath);
    onChange();
    setPath(newPath);
  };

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname])

  return (
    <BottomNavigation
      value={path}
      onChange={handleNavigationChange}
      className={classes.root}      
    >
      <BottomNavigationAction classes={{...actionClasses}} icon={<Home />} value="/" />
      <BottomNavigationAction classes={{...actionClasses}} icon={<FontAwesomeIcon icon={faFlask} />} value="/labs"/>
      <BottomNavigationAction classes={{...actionClasses}} icon={<Storefront />} value="/shop" />
      <BottomNavigationAction classes={{...actionClasses}} icon={<ShoppingCart />} value="/cart" />
    </BottomNavigation>
  );
};

export default Footer;
