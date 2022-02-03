import React, { useState } from "react";
import CartContextProvider from "../contexts/CartContext";
import { CartContext } from "../contexts/CartContext";
import AddToCart from "./AddToCart";
import CartItem from "./CartItem";
import CatalogueWp from "./CatalogueWp";
import { useContext } from "react";

function CardForCartItemOld({ product, bid, setBid }) {
  const { onAdd, onRemove } = useContext(CartContext);

  // console.log(product);
  const handleClickBid = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div className="d-flex flex-wrap " style={{ width: "95%" }}>
      <div className="card " style={{ width: "50%" }}>
        <p>BRAND: {product.brand}</p>
        <p>Model: {product.productName} </p>
        <p>Offer Price(USD/PC) : {product.price} USD</p>
        <div className="card " style={{ width: "50%" }}>
          <p>Q'ty:{product.qty} </p>
          <div>
            <button className="add" onClick={() => onAdd(product)}>
              +
            </button>
            <button className="remove" onClick={() => onRemove(product)}>
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardForCartItemOld;
