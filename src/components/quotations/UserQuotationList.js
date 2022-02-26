import React, { useState, useEffect, useContext } from "react";
import axios from "../../config/axios";
import UserQuotation from "./UserQuotation";

import { AuthContext } from "../../contexts/AuthContext";

function UserQuotationList({ quotations }) {
  const [userQuotationList, setUserQuotationList] = useState([]);

  return (
    <div>
      <div className="p-3">
        <div className="row">
          {quotations.map((item) => {
            const quoList = item.QuotationDetails.map((x) => (
              <>
                <p> {x.Product.productName}</p>
                <p> {x.Product.productName}</p>
              </>
            ));
            console.log(quoList);
            return (
              <div key={item.id} className="col-md-6  p-3 card">
                {item.User.email}
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
