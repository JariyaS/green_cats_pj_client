import React, { useState, useContext, useRef } from "react";
import axios from "../config/axios";
import CartContextProvider from "../contexts/CartContext";
import { CartContext } from "../contexts/CartContext";
import { AuthContext } from "../contexts/AuthContext";
import AddToCart from "./AddToCart";
import CartItem from "./CartItem";
import { Modal } from "bootstrap";
import AdminUpdateProduct from "./Admin/AdminUpdateProduct";

// import CatalogueWp from "./CatalogueWp";
function CardProduct({ product, onAdd }) {
  // console.log(product);
  const modalEl = useRef();
  const { user } = useContext(AuthContext);
  const onDetailClick = () => {
    const modalObj = new Modal(modalEl.current);
    // setModal(modalObj);
    modalObj.show();
  };
  // console.log(user);
  const onDeleteProduct = async () => {
    await axios.delete(`/products/${product.id}`);
  };

  return (
    <>
      <div className="card" style={{ width: "20%" }}>
        <img src={product.productImg} alt="" />

        <p>BRAND: {product.brand}</p>
        <p>Model: {product.productName} </p>
        {user && user.userRole === "user" && (
          <>
            <p>Offer Price : {product.price} $</p>

            <AddToCart product={product} key={product.id} onAdd={onAdd} />
          </>
        )}
        {user && user.userRole === "admin" && (
          <>
            <p>Offer Price : {product.price} $</p>
            <button
              className="add btn btn-success btn-block"
              onClick={onDeleteProduct}
            >
              Delete
            </button>
            <button className="btn btn-info btn-block" onClick={onDetailClick}>
              Update
            </button>

            <div className="modal" tabindex="-1" ref={modalEl}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Update Product</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body ">
                    <AdminUpdateProduct />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CardProduct;
