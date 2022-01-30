import React from "react";
import { useState } from "react";
import HeaderUser from "../layouts/HeaderUser";
import CartItem from "./CartItem";
import CardWithPrice from "./CardWithPrice";
import CatalogueWp from "./CatalogueWp";
import CardForCartItem from "./CardForCartItem";
import { CartContext } from "../contexts/CartContext";

function AddToCart({ product, onAdd }) {
  //   console.log(product);

  const handleClickAdd = () => {
    onAdd(product);
  };

  return (
    <>
      <div>
        <p>
          <button onClick={handleClickAdd} className="btn btn-success">
            Add to Cart
          </button>
        </p>
      </div>
      {/* <CartItem product={product} /> */}
    </>
  );
}

export default AddToCart;
