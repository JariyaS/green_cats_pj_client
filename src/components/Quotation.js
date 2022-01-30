import React from "react";
import { Link, NavLink } from "react-router-dom";

function Quotation() {
  return (
    <>
      <div>Quotation</div>
      <Link
        to="/quotation-detail"
        style={{ padding: "10px", textDecoration: "none" }}
      >
        Submit
      </Link>
    </>
  );
}

export default Quotation;
