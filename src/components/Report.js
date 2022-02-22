import React, { useState, useRef, useEffect } from "react";
import QuotationDetail from "./quotations/QuotationDetails";
import QuotationList from "./quotations/QuotationList";
import axios from "axios";

function Report() {
  const [quotations, setQuotations] = useState([{}]);

  useEffect(() => {
    axios
      .get("/quotations")

      .then((res) => {
        console.log(quotations);
        setQuotations(res.data.quotation); // set new state
        console.log(res.data.quotation);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-3">
      <h3 style={{ marginLeft: "30vw" }}>Summary Report</h3>
      <div className="row">
        {/* <p>id: {quotations[0].quotationNo}</p> */}

        {quotations &&
          quotations.map((item) => (
            <div key={item.id} className="col-md-6  p-3 card">
              <h4>
                Created Date:{" "}
                {new Date(item.createdAt).toLocaleString().split(",")[0]}
              </h4>
              <h4>Quotation No.: {item.quotationNo}</h4>
              <h4>Total Amount.: {item.totalOfferAmount}$</h4>
              <h4>Status: {item.status}</h4>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Report;
