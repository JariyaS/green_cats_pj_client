import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { FaSignOutAlt } from "react-icons/fa";

import { BsShop, BsFillFileTextFill, BsBagCheckFill } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";

import React from "react";

// import Report from "../components/Report";
// import QuotationList from "../components/QuotationList";

function HeaderAdmin() {
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
          <div>
            <Link
              to="/quotationlist"
              style={{ padding: "10px", textDecoration: "none" }}
            >
              <BsBagCheckFill />
              Quotation List
            </Link>
            <Link
              to="/report"
              style={{ padding: "10px", textDecoration: "none" }}
            >
              <BsFillFileTextFill />
              Report
            </Link>
            <Link
              to="/catalogue-wp"
              style={{ padding: "10px", textDecoration: "none" }}
            >
              <BsShop />
              Catalogue
            </Link>
            <Link
              to="/admin-update"
              style={{ padding: "10px", textDecoration: "none" }}
            >
              <BiEdit />
              Add New Product
            </Link>

            <Link to="/" style={{ padding: "10px", textDecoration: "none" }}>
              <span onClick={() => logout()}>
                <FaSignOutAlt />
                Logout
              </span>
            </Link>
          </div>
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
