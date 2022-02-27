import { Link, NavLink } from "react-router-dom";
import { BsFillHouseFill, BsWhatsapp, BsShop } from "react-icons/bs";

import React from "react";

function HeaderGuest() {
  return (
    <div className="header-layout">
      <div className="header-green-top">
        <div className="header-green-mid">
          <div style={{ width: "40vw", marginLeft: "30px" }}>
            {" "}
            <h1>GREEN CATS</h1>
            <h4>PGM Recovery Systems</h4>
          </div>
        </div>
        <div className="link-header-guest">
          <Link to="/" className="link-style">
            <BsFillHouseFill />
            Home
          </Link>
          <Link to="/catalogue-np" className="link-style">
            <BsShop />
            Catalogue
          </Link>

          <Link to="/contact" className="link-style">
            <BsWhatsapp />
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
export default HeaderGuest;
