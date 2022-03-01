import React, { useState, useRef, useEffect } from "react";
import axios from "../config/axios";
import Pagination from "../layouts/Pagination";

function Report() {
  const [quotations, setQuotations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [quotationPerPage, setQuotationPerPage] = useState(4);

  useEffect(() => {
    axios
      .get("/quotations")

      .then((res) => {
        // console.log(quotations);
        setQuotations(res.data.quotation); // set new state
        // console.log(res.data.quotation);
      })
      .catch((err) => console.log(err));
  }, []);

  const paginate = (number) => setCurrentPage(number);

  const indexOfLastQuotation = currentPage * quotationPerPage;
  const indexOfFirstProduct = indexOfLastQuotation - quotationPerPage;
  const currentQuotation = quotations.slice(
    indexOfFirstProduct,
    indexOfLastQuotation
  );

  return (
    <div className="p-3">
      <h3 style={{ marginLeft: "30vw" }}>Summary Report</h3>
      <Pagination
        itemsPerpage={quotationPerPage}
        totalItems={quotations.length}
        paginate={paginate}
      />
      <div className="row">
        {currentQuotation.map((item) => (
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
