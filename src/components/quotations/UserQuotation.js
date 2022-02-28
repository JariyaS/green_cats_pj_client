import React, { useState, useEffect, useContext } from "react";
import axios from "../../config/axios";

import { AuthContext } from "../../contexts/AuthContext";

function UserQuotation() {
  const { user } = useContext(AuthContext);
  const [quotations, setQuotations] = useState([]);

  useEffect(() => {
    console.log(user.id);
    axios
      .get(`/userQuotations/${user.id}`)
      //   .get("/quotations")
      .then((res) => {
        setQuotations(res.data.quotationDetail);
        console.log(res.data.quotationDetail);
        // console.log(res.data.quotationDetail[0].QuotationDetails[0].Product.product_name);
      })
      .catch((err) => console.log(err));
  }, [user]);

  // console.log(user.id);

  return (
    <div>
      <div>
        <div className="userQuotation-card row">
          {quotations.map((item) => (
            <div className="col-md-12  p-3 card">
              <div>
                <p>
                  Customer Name : {item.User.first_name} {item.User.last_name}
                </p>
                <p>Submitted Date: {item.createdAt.split("T")[0]}</p>
                <p>Quotation No. : {item.quotationNo}</p>
                <p>Total Amount: {item.totalOfferAmount} $</p>
              </div>
              {item.QuotationDetails.map((item) => (
                <div className="quoDetail col-md-12  p-3 card">
                  <p>Brand Name: {item.Product.Brand.brand_name}</p>
                  <p>Product Name: {item.Product.product_name}</p>
                  <p>Price/piece: {item.product_price} $ </p>
                  <p>Quantity (pc): {item.quantity}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default UserQuotation;
