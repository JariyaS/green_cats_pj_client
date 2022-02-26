import { Link, NavLink } from "react-router-dom";
import { BsFillHouseFill, BsWhatsapp, BsShop } from "react-icons/bs";

import React from "react";

function HeaderGuest() {
  return (
    <div
      style={{ backgroundColor: "rgb(182,227,212)", color: "rgb(0, 100, 0)" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ marginLeft: "20px", marginTop: "20px" }}>
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
            // marginRight: "2%",
          }}
        >
          <Link
            to="/"
            style={{
              padding: "10px",
              textDecoration: "none",
              color: "rgb(0, 51, 153)",
            }}
          >
            <BsFillHouseFill />
            Home
          </Link>
          <Link
            to="/catalogue-np"
            style={{
              padding: "10px",
              textDecoration: "none",
              color: "rgb(0, 51, 153)",
            }}
          >
            <BsShop />
            Catalogue
          </Link>

          <Link
            to="/contact"
            style={{
              padding: "10px",
              textDecoration: "none",
              color: "rgb(0, 51, 153)",
              marginRight: "20px",
            }}
          >
            <BsWhatsapp />
            Contact
          </Link>
        </div>
      </div>
      {/* <hr width="100%;" size="5" style={{ marginBottom: "0px" }}></hr> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around ",
        }}
      ></div>
    </div>
  );
}
export default HeaderGuest;
