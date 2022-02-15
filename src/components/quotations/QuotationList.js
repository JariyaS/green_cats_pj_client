import React, { useState, useEffect } from "react";

import Quotation from "./Quotation";
import axios from "axios";
import QuotationDetails from "./QuotationDetails";

function QuotationList() {
  const [quotations, setQuotations] = useState([]);

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
  // console.log(quotations);

  return (
    <div>
      <div className="p-3">
        <div className="row">
          {/* {JSON.stringify(quotations)} */}
          {quotations &&
            quotations.map((item) => (
              <div key={item.id} className="col-md-6  p-3 card">
                <QuotationDetails quotation={item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default QuotationList;
