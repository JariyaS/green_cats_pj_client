import React, { useState } from "react";
import CartContextProvider from "../contexts/CartContext";
import { CartContext } from "../contexts/CartContext";
import AddToCart from "./AddToCart";
import CartItem from "./CartItem";
import CatalogueWp from "./CatalogueWp";

function CardForCartItem({ product }) {
  return (
    <>
      <div className="card" style={{ width: "20%" }}>
        <p>BRAND: {product.Brand.brand_name}</p>
        <p>Model: {product.product_name} </p>
        <p>Offer Price : {product.product_price} THB</p>
      </div>
    </>
  );
}

export default CardForCartItem;
