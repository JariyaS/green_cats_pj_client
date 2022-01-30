import React from "react";
import HeaderUser from "../layouts/HeaderUser";
import CardWithPrice from "./CardWithPrice";
import CatalogueWithPrice from "../pages/CatalogueWithPrice";
import AddToCart from "./AddToCart";
import CardForCartItem from "./CardForCartItem";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

import { useEffect, useState } from "react";
import axios from "axios";

function CartItem() {
  const { cartItems, onAdd } = useContext(CartContext);
  // console.log(cartItems[0]);
  let total = 0;
  let totalQty = 0;
  let totalBid = 0;
  for (let item of cartItems) {
    total += item.product_price * item.qty;
    totalQty += item.qty;
    totalBid += item.bidPrice * item.qty;
  }
  // let itemsPrices = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <>
      <div className="d-flex flex-wrap" style={{ width: "95%" }}>
        <div className="card " style={{ width: "50%" }}>
          <h4>Toal Q'ty:{totalQty} </h4>
          <h4>Toal Amount:{total}</h4>
        </div>
        <div className="card " style={{ width: "50%" }}>
          <h4>Toal Q'ty:{totalQty} </h4>
          <h4>Toal Amount:{totalBid} </h4>
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {cartItems.map((item) => (
          <CardForCartItem product={item} key={item.id} onAdd={onAdd} />
        ))}
      </div>

      <button className="d-flex btn btn-primary " type="submit">
        Submit
      </button>
    </>
  );
}

export default CartItem;
