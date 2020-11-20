import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFlask,
  faStore,
  faShoppingCart,
  faUserMd,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
  <nav className="footer">
    <Link to="/">
      <FontAwesomeIcon icon={faHome} />
    </Link>
    <Link to="/labs">
      <FontAwesomeIcon icon={faFlask} />
    </Link>
    <Link to="/shop">
      <FontAwesomeIcon icon={faStore} />
    </Link>
    <Link to="/cart">
      <FontAwesomeIcon icon={faShoppingCart} />
    </Link>
    <Link to="/chat">
      <FontAwesomeIcon icon={faUserMd} />
    </Link>
  </nav>
);

export default Footer;
