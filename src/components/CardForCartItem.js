import React, { useState } from "react";
import CartContextProvider from "../contexts/CartContext";
import { CartContext } from "../contexts/CartContext";
import AddToCart from "./AddToCart";
import CartItem from "./CartItem";
import CatalogueWp from "./CatalogueWp";
import { useContext } from "react";

function CardForCartItemOld({ product }) {
  const { onAdd, onRemove } = useContext(CartContext);

  return (
    <div className="cart-item1">
      <div className="cart-item2 card ">
        <p>BRAND: {product.brand}</p>
        <p>Model: {product.productName} </p>
        <p>Offer Price(USD/PC) : {product.price}$</p>
        <div className="cart-item3 card">
          <p>Q'ty:{product.qty} </p>
          <div>
            <button
              className="add btn btn-outline-secondary btn-sm"
              onClick={() => onAdd(product)}
            >
              +
            </button>
            <button
              className="remove btn btn-outline-secondary btn-sm"
              onClick={() => onRemove(product)}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardForCartItemOld;
