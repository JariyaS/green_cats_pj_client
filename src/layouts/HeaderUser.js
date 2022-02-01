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
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div style={{ width: "40vw", marginLeft: "20px" }}>
            {" "}
            <h1 style={{ margintop: "100px" }}>GREEN CATS</h1>
            <h4 style={{ margin: 0 }}>Spent Auto Catalytic Converter Buyer</h4>
          </div>
        </div>
        <div
          style={{
            width: "40vw",
            alignSelf: "end",
            textAlign: "right",
            marginRight: "10%",
          }}
        >
          <Link to="/home" style={{ padding: "10px", textDecoration: "none" }}>
            <BsFillHouseFill />
          </Link>
          <Link
            to="/catalogue-wp"
            style={{ padding: "10px", textDecoration: "none" }}
          >
            <BsShop />
          </Link>
          <Link to="/cart" style={{ padding: "10px", textDecoration: "none" }}>
            <BsFillCartFill />
          </Link>
          <Link
            to="/contact"
            style={{ padding: "10px", textDecoration: "none" }}
          >
            <BsWhatsapp />
          </Link>
          <Link to="/" style={{ padding: "10px", textDecoration: "none" }}>
            <span onClick={() => logout()}>
              <FaSignOutAlt />
            </span>
          </Link>
        </div>
      </div>
      <hr width="100%;" color="blue" size="5"></hr>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around ",
        }}
      ></div>
    </>
  );
}
export default HeaderUser;
