import React, { useState, useEffect } from "react";
import Quotation from "./Quotation";
import axios from "axios";

function QuotationList() {
  const [quotations, setQuotations] = useState();

  useEffect(() => {
    axios
      .get("/quotations")

      .then((res) => {
        setQuotations(res.data.quotation);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(quotations);

  return (
    <div>
      <div className="p-3">
        <div className="row">
          {/* {JSON.stringify(quotations)} */}
          {quotations &&
            quotations.map((item) => (
              <div key={item.id} className="col-md-6  p-3 card">
                {/* <p>{item.id}</p> */}
                <p>Quotation Number: {item.quotationNo}</p>
                <p>Total Amount: $ {item.totalOfferAmount}</p>

                <button>Status: {item.status}</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default QuotationList;
