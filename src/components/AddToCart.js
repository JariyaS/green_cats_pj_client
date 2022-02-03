import React from "react";
import { useState, useContext } from "react";
import HeaderUser from "../layouts/HeaderUser";
import CartItem from "./CartItem";
import CardWithPrice from "./CardWithPrice";
import CatalogueWp from "./CatalogueWp";
import CardForCartItem from "./CardForCartItem";
import { CartContext } from "../contexts/CartContext";

function AddToCart({ product }) {
  const { onAdd, onRemove, cartItems } = useContext(CartContext);

  const handleClickAdd = () => {
    onAdd(product);
  };

  return (
    <div className="p-3 m-4">
      <div>
        <p>
          <button onClick={handleClickAdd} className="btn btn-success">
            Add to Cart
          </button>
        </p>
      </div>

      {/* <CartItem product={product} /> */}
    </div>
  );
}

export default AddToCart;
