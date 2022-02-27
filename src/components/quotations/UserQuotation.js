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
        <div className="row">
          <>
            {console.log(quotations)}
            {/* <p>Total Amount : {quotations}</p> */}
          </>

          {quotations.map((item) => {
            const quoList = item.QuotationDetails.map((x) => (
              <>
                <div className="col-md-12  p-3 card">
                  <p> Brand Name : {x.Product.Brand.brand_name}</p>
                  <p> Product Name : {x.Product.product_name}</p>
                  <p> Price/piece :{x.product_price} $</p>
                  <p> Quantity (pc) : {x.quantity} </p>
                  <p> Amount : {x.product_price * x.quantity}$</p>
                </div>
              </>
            ));
            // console.log(quoList);
            return (
              <div key={item.id} className="col-md-6  p-3 card">
                {quoList}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default UserQuotation;
