import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Modal } from "bootstrap";
import CartItem from "../CartItem";

function QuotationDetail({ quotation, loadQuotation }) {
  const modalEl = useRef();

  const [modal, setModal] = useState(null);
  const [quotationDetails, setQuotationDetails] = useState(null);

  const onDetailClick = () => {
    const modalObj = new Modal(modalEl.current);
    axios
      .get(`/quotations/${quotation.id}`)

      .then((res) => {
        // console.log(quotationDetails);
        setQuotationDetails(res.data); // set new state
        console.log(res.data);

        // console.log(res.data.userId);
        // console.log(res.data.QuotationDetails[0].id);

        setModal(modalObj);
        modalObj.show();
        return res.data;
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  const onUpdateClick = () => {
    axios
      .patch(`/quotations/${quotation.id}`)

      .then((res) => {
        return res.data;
      })
      .then((res) => {
        loadQuotation();
        modal.hide();
      })
      .catch((err) => console.log(err));
  };

  const onDeleteClick = async () => {
    await axios.delete(`/quotations/${quotation.id}`);
    loadQuotation();
    modal.hide();
  };

  return (
    <div>
      <div className="col-md-6  p-3 card">
        <p>Quotation Number: {quotation.quotationNo}</p>
        <p>Total Amount: $ {quotation.totalOfferAmount}</p>

        <button>Status: {quotation.status}</button>
        <button className="btn btn-success btn-sm" onClick={onDetailClick}>
          Detail..
        </button>
      </div>
      <div className="modal" tabindex="-1" ref={modalEl}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Quotation Details</h5>
              <button
                type="button"
                className="btn btn-success ms-3"
                onClick={onUpdateClick}
              >
                update status to :{" "}
                {quotation.status === "Waiting" ? "Delivered" : "Waiting"}
              </button>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body bg-info">
              {quotationDetails &&
                quotationDetails.QuotationDetails.map((item) => (
                  <div key={item.id}>
                    <p>Submitted Date : {item.createdAt.split("T")[0]}</p>
                    <p>User Name : {quotationDetails.User.firstName}</p>
                    <p>Brand Name : {item.Product.Brand.brandName}</p>
                    <p>Product Name : {item.Product.productName}</p>
                    <p>Product Price : {item.productPrice}$</p>

                    <p>Quantity: {item.quantity} pcs.</p>
                    <hr />
                  </div>
                ))}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                onClick={onUpdateClick}
              >
                update status to :{" "}
                {quotation.status === "Waiting" ? "Delivered" : "Waiting"}
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={onDeleteClick}
              >
                Delete
              </button>
              {/* <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuotationDetail;
