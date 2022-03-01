import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { CartContext } from "../contexts/CartContext";

import { FaSignOutAlt } from "react-icons/fa";
import {
  BsFillHouseFill,
  BsFillCartFill,
  BsWhatsapp,
  BsShop,
  BsCardChecklist,
} from "react-icons/bs";

import React from "react";

function HeaderUser() {
  const { logout } = useContext(AuthContext);
  const { length, clearCartItems } = useContext(CartContext);

  const handleClickLogOut = () => {
    clearCartItems();
    logout();
  };

  return (
    <div className="header-layout">
      <div className="header-green-top">
        <div>
          <div className="header-green-mid">
            <h2>GREEN CATS</h2>
            <h4>PGM Recovery Systems</h4>
          </div>
        </div>
        <div className="link-header">
          <Link to="/home" style={{ padding: "10px", textDecoration: "none" }}>
            <BsFillHouseFill />
            Home
          </Link>
          <Link
            to="/catalogue"
            style={{ padding: "10px", textDecoration: "none" }}
          >
            <BsShop />
            Catalogue
          </Link>
          <Link to="/cart" style={{ padding: "10px", textDecoration: "none" }}>
            <BsFillCartFill />
            Cart <span>{length}</span>
          </Link>
          <Link
            to="/user-quotation"
            style={{ padding: "10px", textDecoration: "none" }}
          >
            <BsCardChecklist />
            Your Quotation
          </Link>
          <Link
            to="/contact"
            style={{ padding: "10px", textDecoration: "none" }}
          >
            <BsWhatsapp />
            Contact
          </Link>
          <Link to="/" style={{ padding: "10px", textDecoration: "none" }}>
            <span onClick={handleClickLogOut}>
              <FaSignOutAlt />
              Logout
            </span>
          </Link>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around ",
        }}
      ></div>
    </div>
  );
}
export default HeaderUser;
