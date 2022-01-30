import React from "react";
import { useState } from "react";
import HeaderUser from "../layouts/HeaderUser";
import CartItem from "./CartItem";
import CardWithPrice from "./CardWithPrice";
import CatalogueWp from "./CatalogueWp";

function AddToCart({ product, onAdd }) {
  //   console.log(product);

  const handleClickAdd = () => {
    onAdd(product);
  };

  return (
    <div>
      <p>
        <button onClick={handleClickAdd} className="btn btn-success">
          Add to Cart
        </button>
        {/* <div>
          <button>+</button>
          <button>-</button> */}
        {/* </div> */}
      </p>
    </div>
  );
}

export default AddToCart;
