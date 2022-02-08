import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import { FaSignOutAlt } from "react-icons/fa";
import {
  BsFillHouseFill,
  BsFillCartFill,
  BsWhatsapp,
  BsShop,
} from "react-icons/bs";

import React from "react";

function HeaderUser() {
  const { logout } = useContext(AuthContext);

  return (
    <div style={{ backgroundColor: "rgb(182,227,212)", color: "Green" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div style={{ width: "40vw", marginLeft: "20px" }}>
            {" "}
            <h1
              style={{
                margintop: "100px",
                fontamily: "'Cormorant Garamond' , serif",
              }}
            >
              GREEN CATS
            </h1>
            <h4 style={{ margin: 0, fontFamily: "'Dancing Script', cursive" }}>
              Spent Auto Catalytic Converter Buyer
            </h4>
          </div>
        </div>
        <div
          style={{
            width: "60vw",
            alignSelf: "end",
            textAlign: "right",
            marginRight: "2%",
          }}
        >
          <Link to="/home" style={{ padding: "10px", textDecoration: "none" }}>
            <BsFillHouseFill />
            <a>Home</a>
          </Link>
          <Link
            to="/catalogue"
            style={{ padding: "10px", textDecoration: "none" }}
          >
            <BsShop />
            <a>Catalogue</a>
          </Link>
          <Link to="/cart" style={{ padding: "10px", textDecoration: "none" }}>
            <BsFillCartFill />
            <a>Cart</a>
          </Link>
          <Link
            to="/contact"
            style={{ padding: "10px", textDecoration: "none" }}
          >
            <BsWhatsapp />
            <a>Contact</a>
          </Link>
          <Link to="/" style={{ padding: "10px", textDecoration: "none" }}>
            <span onClick={() => logout()}>
              <FaSignOutAlt />
              <a>Logout</a>
            </span>
          </Link>
        </div>
      </div>
      <hr width="100%;" size="5"></hr>
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
