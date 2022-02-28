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
  const { cartItems, totalQty, totalOffer } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="card-item1 p-3">
      <div
        className="card-item2 col"
        // style={{ width: "100%", justifyContent: "space-between " }}
      >
        <div>
          <div>
            {cartItems.map((item) => (
              <CardForCartItem product={item} key={item.id} />
            ))}
          </div>
        </div>
        <div className="catalogue-card card ">
          <h4>Total Q'ty:{totalQty} pcs. </h4>
          <h4>Total Amount(USD):{totalOffer}$</h4>
        </div>
        <div className="submit-button-cartItem">
          <button
            className="btn btn-primary "
            type="submit"
            onClick={() => navigate("/quotation")}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
