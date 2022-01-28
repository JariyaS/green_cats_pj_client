import { Link, NavLink } from "react-router-dom";

import React from "react";

function HeaderAdmin() {
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
          <Link to="/home" style={{ padding: "10px", textDecoration: "none" }}>
            Approved List |
          </Link>
          <Link
            to="/catalogue"
            style={{ padding: "10px", textDecoration: "none" }}
          >
            Report
          </Link>
          <Link to="/cart" style={{ padding: "10px", textDecoration: "none" }}>
            Cart
          </Link>
          <Link to="/home" style={{ padding: "10px", textDecoration: "none" }}>
            Home
          </Link>
          <Link
            to="/catalogue-wp"
            style={{ padding: "10px", textDecoration: "none" }}
          >
            Catalogue
          </Link>
          <Link to="/cart" style={{ padding: "10px", textDecoration: "none" }}>
            Cart
          </Link>
          <Link
            to="/contact"
            style={{ padding: "10px", textDecoration: "none" }}
          >
            Contact
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
    </div>
  );
}
export default HeaderAdmin;
