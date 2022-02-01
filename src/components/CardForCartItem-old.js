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
    <div className="d-flex flex-wrap" style={{ width: "95%" }}>
      <div className="card " style={{ width: "50%" }}>
        <p>BRAND: {product.Brand.brand_name}</p>
        <p>Model: {product.product_name} </p>
        <p>Offer Price(THB/PC) : {product.product_price} THB</p>
      </div>
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

        <form action="/action_page.php" onSubmit={handleClickBid}>
          <div className="d-flex flex-wrap">
            <label htmlFor="quantity">Bid Price (THB/PC) : </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              max="30000"
              value={bid}
              onChange={(e) => setBid(e.target.value)}
            />
            <button className="d-flex btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CardForCartItemOld;
