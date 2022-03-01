import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Modal } from "bootstrap";
import CartItem from "../CartItem";

function QuotationDetail({ quotation, loadQuotation }) {
  // console.log(quotation);
  const modalEl = useRef();

  const [modal, setModal] = useState(null);
  const [details, setDetails] = useState(null);

  const onDetailClick = () => {
    const modalObj = new Modal(modalEl.current);

    console.log(quotation.id);
    axios

      .get(`/quotations/${quotation.id}`)

      .then((res) => {
        // setQuotationDetails(res.data.quotationDetail); // set new state
        setDetails(res.data);
        console.log(res.data);
        // console.log(res);
        // console.log(res.data.quotationDetail);

        setModal(modalObj);
        modalObj.show();
        // console.log(details);
        return res.data;
      })

      // .then((res) => {
      //   console.log(res.data);
      // })
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
      <div className="quotation-details col-md-6  p-3 card">
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
              {/* {details && JSON.stringify(details.QuotationDetails)} */}
              {details && (
                <>
                  <p> Submitted Date : {details.createdAt.split("T")[0]}</p>
                  <p>
                    {" "}
                    Customer Name : {details.User.first_name}{" "}
                    {details.User.last_name}
                  </p>
                  <p> Phone Number : {details.User.phone_number} </p>

                  {details.QuotationDetails.map((item) => (
                    <div className="col-md-6  p-3 card">
                      <p>Brand Name : {item.Product.Brand.brand_name}</p>
                      <p>Product Name : {item.Product.product_name}</p>
                      <p>Q'ty: {item.quantity} pcs.</p>
                      <p>Price: {item.product_price}$</p>
                    </div>
                  ))}
                </>
              )}
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
