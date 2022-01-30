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
  console.log(cartItems);

  return (
    <>
      <div className="d-flex flex-wrap">
        {cartItems.map((item) => (
          <CardForCartItem product={item} key={item.id} onAdd={onAdd} />
        ))}
      </div>
    </>
  );
}

export default CartItem;
