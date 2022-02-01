import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import { FaProductHunt } from "react-icons/fa";

function Quotation() {
  const { user } = useContext(AuthContext);
  const { cartItems, totalQty, totalOffer, reCalculate } =
    useContext(CartContext);
  console.log(cartItems);
  console.log(user);
  const navigate = useNavigate();
  return (
    <div className="p-3">
      <h3 style={{ marginLeft: "30vw" }}>Quotation</h3>
      <h4>Name:{user.firstName}</h4>
      <h4>Last Name:{user.lastName}</h4>
      <h4>Phone No.:{user.phoneNumber}</h4>
      <h4>Quantity(PC.):{totalQty}</h4>
      <h4>Total Amount(THB):{totalOffer}</h4>

      <p>
        Please send products to us within 5 days after submit this form,
        otherwise prices might be changed without notice.
      </p>
      <button
        className="d-flex btn btn-primary"
        className="d-flex btn btn-primary "
        type="submit"
        onClick={() => navigate("/quotation-detail")}
      >
        Submit
      </button>
    </div>
  );
}

export default Quotation;
