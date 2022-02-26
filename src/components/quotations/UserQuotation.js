import React, { useState, useEffect, useContext } from "react";
import axios from "../../config/axios";

import { AuthContext } from "../../contexts/AuthContext";

function UserQuotation() {
  const { user } = useContext(AuthContext);
  const [quotations, setQuotations] = useState([]);
  console.log("test");

  useEffect(() => {
    console.log(user.id);
    axios
      .get(`/quotations/${user.id}`)
      //   .get("/quotations")
      .then((res) => {
        setQuotations(res.data.quotationDetail);
        // console.log(setQuotations);
        // console.log(res.data.quotation);
        console.log(res.data);
        console.log(res.data.quotationDetail);
      })
      .catch((err) => console.log(err));
  }, [user]);

  console.log(user.id);

  return (
    <div>
      <div className="p-3">
        <div className="row">
          {/* {JSON.stringify(setQuotations)} */}
          {quotations.map((item) => {
            const quoList = item.QuotationDetails.map((x) => (
              <>
                <p> {x.quantity}</p>
                <p> {x.Product.productPrice}</p>
                <p> {x.Product.productName}</p>
              </>
            ));
            console.log(quoList);
            return (
              <div key={item.id} className="col-md-6  p-3 card">
                {quoList}
              </div>
            );
          })}
          <p>Your Quotation</p>
        </div>
      </div>
    </div>
  );
}
export default UserQuotation;
