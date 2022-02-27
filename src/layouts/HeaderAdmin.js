import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { FaSignOutAlt } from "react-icons/fa";

import { BsShop, BsFillFileTextFill, BsBagCheckFill } from "react-icons/bs";
import { BiBookAdd } from "react-icons/bi";

import React from "react";

// import Report from "../components/Report";
// import QuotationList from "../components/QuotationList";

function HeaderAdmin() {
  const { logout } = useContext(AuthContext);
  return (
    <div className="header-layout">
      <div className="header-green-top">
        <div>
          <div className="header-green-mid">
            {" "}
            <h1>GREEN CATS</h1>
            <h4>PGM Recovery Systems</h4>
          </div>
        </div>
        <div className="link-header">
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
              <BiBookAdd />
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
    </div>
  );
}
export default HeaderAdmin;
