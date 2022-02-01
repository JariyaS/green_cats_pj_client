import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function QuotationDetails() {
  const navigate = useNavigate();
  return (
    <div className="p-3">
      <div>Quotation Details</div>
      <button
        className="d-flex btn btn-primary"
        className="d-flex btn btn-primary "
        type="submit"
        onClick={() => navigate("/contact")}
      >
        Submit
      </button>
    </div>
  );
}

export default QuotationDetails;
