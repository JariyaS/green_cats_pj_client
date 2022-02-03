import React, { useState } from "react";
import CartContextProvider from "../contexts/CartContext";
import { CartContext } from "../contexts/CartContext";

import CatalogueWp from "./CatalogueWp";

function CardWithPriceAdmin({ product, onAdd }) {
  console.log(product);
  return (
    <>
      <div className="card" style={{ width: "20%" }}>
        <img src={product.productImg} alt="" />

        <p>BRAND: {product.brand}</p>
        <p>Model: {product.productName} </p>
        <p>Offer Price : {product.price} USD</p>
      </div>
    </>
  );
}

export default CardWithPriceAdmin;
