import React, { useState, useEffect } from "react";

import Quotation from "./Quotation";
import axios from "axios";
import QuotationDetails from "./QuotationDetails";

function QuotationList() {
  const [quotations, setQuotations] = useState([]);
  const [filteredQuotations, setFilteredQuotations] = useState([]);
  function loadQuotation() {
    axios
      .get("/quotations")

      .then((res) => {
        // console.log(quotations);
        setQuotations(res.data.quotation); // set new state
        setFilteredQuotations(res.data.quotation);
        // console.log(res.data.quotation);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    loadQuotation();
  }, []);
  // console.log(quotations);

  const handleWaitingClick = () => {
    setFilteredQuotations(
      quotations.filter((item) => item.status === "Waiting")
    );
  };
  const handleDeliveredClick = () => {
    setFilteredQuotations(
      quotations.filter((item) => item.status === "Delivered")
    );
  };

  return (
    <div>
      <div className="quotation-list p-3 ">
        <button className="btn btn-primary" onClick={handleWaitingClick}>
          Waiting
        </button>
        <button className="btn btn-info" onClick={handleDeliveredClick}>
          Delivered
        </button>
        {/* {JSON.stringify(quotations)} */}
        {quotations &&
          filteredQuotations.map((item) => (
            <div key={item.id} className="col-md-9  p-3 card">
              <QuotationDetails
                quotation={item}
                loadQuotation={loadQuotation}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
export default QuotationList;
