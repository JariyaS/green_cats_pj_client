import React, { useState } from "react";
import CartContextProvider from "../contexts/CartContext";
import { CartContext } from "../contexts/CartContext";
import AddToCart from "./AddToCart";
import CatalogueWp from "./CatalogueWp";

function CardWithPrice({ product, onAdd }) {
  return (
    <div className="card" style={{ width: "20%" }}>
      <img src={product.product_img} alt="" />

      <p>BRAND: {product.Brand.brand_name}</p>
      <p>Model: {product.product_name} </p>
      <p>Offer Price : {product.product_price} THB</p>

      <AddToCart product={product} key={product.id} onAdd={onAdd} />
    </div>
  );
}

export default CardWithPrice;
