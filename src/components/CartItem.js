import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderUser from "../layouts/HeaderUser";
import CardProduct from "./CardProduct";
import CatalogueWithPrice from "../pages/Catalogue";
import AddToCart from "./AddToCart";
import CardForCartItem from "./CardForCartItem";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

import { useEffect, useState } from "react";

function CartItem() {
  const { cartItems, onAdd, setBid, totalQty, totalOffer, reCalculate } =
    useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="p-3">
      <div
        className="d-flex flex-wrap"
        style={{ width: "95%", justifyContent: "space-between" }}
      >
        <div className="card " style={{ width: "50%" }}>
          <h4>Total Q'ty:{totalQty} pcs. </h4>
          <h4>Total Amount(USD):{totalOffer}$</h4>
        </div>
      </div>
      <div></div>
      <div>
        <div className="d-flex flex-wrap">
          {cartItems.map((item) => (
            <CardForCartItem
              product={item}
              key={item.id}
              onAdd={onAdd}
              bid={item.bid}
              setBid={setBid}
            />
          ))}
        </div>
      </div>

      <button
        className="d-flex btn btn-primary "
        type="submit"
        onClick={() => navigate("/quotation")}
      >
        Submit
      </button>
    </div>
  );
}

export default CartItem;
