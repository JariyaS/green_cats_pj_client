import React from "react";
// import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import axios from "../../config/axios";
const { v4: uuidv4 } = require("uuid");

// import quotations from "../../../green_cats_api/models/quotations";

function Quotation() {
  const { user } = useContext(AuthContext);
  const { totalQty, totalOffer, cartItems } = useContext(CartContext);
  // console.log(cartItems);
  // console.log(user);
  const navigate = useNavigate();

  const hdlSubmitQuotation = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/quotations", {
        totalOfferAmount: totalOffer,
        userId: user.id,
      });
      // console.log(res);

      const quotationId = res.data.addQuotation.id;
      // console.log(quotationId);
      // const quotation = res.data.addQuotation;
      // console.log(quotation);
      const quotationDetail = async () => {
        try {
          const resQuotationDetails = await axios.post("/quotations/create", {
            cartItems,
            quotationId,
          });
          console.log(resQuotationDetails);
        } catch (err) {
          console.log(err.message);
        }
      };
      quotationDetail();

      navigate("/user-quotation");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="p-3">
        <h3 style={{ marginLeft: "30vw" }}>Quotation</h3>
        <h4>First Name: {user.firstName}</h4>
        <h4>Last Name: {user.lastName}</h4>
        <h4>Phone No.: {user.phoneNumber}</h4>
        <h4>Quantity: {totalQty} pcs.</h4>
        <h4>Total Amount: {totalOffer} $</h4>

        <button
          className="d-flex btn btn-primary"
          // className="d-flex btn btn-primary"
          type="submit"
          // onClick={() => navigate("/contact")}
          onClick={hdlSubmitQuotation}
        >
          Submit
        </button>
      </div>
      <p>
        Please send products to us within 5 days after submit this form,
        otherwise prices might be changed without notice.
      </p>
    </>
  );
}

export default Quotation;
