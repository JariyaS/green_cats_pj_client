// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// function QuotationDetail() {
//   const { user } = useContext(AuthContext);
//   const { totalQty, totalOffer } = useContext(CartContext);
//   // console.log(cartItems);
//   // console.log(user);
//   const navigate = useNavigate();

//   const hdlSubmitQuotation = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("/quotationdetails", {
//         totalOfferAmount: totalOffer,
//         userId: user.id,
//       });

//       navigate("/contact");
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   return (
//     <div className="p-3">
//       <div>Quotation Details</div>
//       <button
//         className="d-flex btn btn-primary"
//         className="d-flex btn btn-primary "
//         type="submit"
//         onClick={}
//       >
//         Submit
//       </button>
//     </div>
//   );
// }

// export default QuotationDetails;
