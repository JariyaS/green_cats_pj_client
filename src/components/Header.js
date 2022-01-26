import { useDispatch, useSelector } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

import React from "react";

function Header() {
  return (
    <div>
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
          <a href="./home" style={{ padding: "10px", textDecoration: "none" }}>
            Home
          </a>
          <a
            href="./catalogue"
            style={{ padding: "10px", textDecoration: "none" }}
          >
            Catalogue
          </a>
          <a href="./cart" style={{ padding: "10px", textDecoration: "none" }}>
            Cart
          </a>
          <a
            href="./contact"
            style={{ padding: "10px", textDecoration: "none" }}
          >
            Contact
          </a>
        </div>
      </div>
      <hr width="100%;" color="blue" size="5"></hr>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around ",
        }}
      ></div>
    </div>
  );
}
export default Header;
