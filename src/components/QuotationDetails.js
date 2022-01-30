import React from "react";
import { Link, NavLink } from "react-router-dom";

function QuotationDetails() {
  return (
    <>
      <div>Quotation Details</div>
      <Link to="/contact" style={{ padding: "10px", textDecoration: "none" }}>
        Submit
      </Link>
    </>
  );
}

export default QuotationDetails;
