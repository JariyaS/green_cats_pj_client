import React from "react";
import { useState, useContext } from "react";
import HeaderUser from "../layouts/HeaderUser";
import CartItem from "./CartItem";
import CardProduct from "./CardProduct";
import CatalogueWp from "./CatalogueWp";
import CardForCartItem from "./CardForCartItem";
import { CartContext } from "../contexts/CartContext";

function AddToCart({ product }) {
  const { onAdd, onRemove, cartItems } = useContext(CartContext);
  const [selected, setSelected] = useState(false);

  const handleClickAdd = () => {
    setSelected((prv) => !prv);
    // onAdd(product);
    console.log(cartItems);
    const idx = cartItems.findIndex((x) => x.id === product.id);
    if (idx != -1) {
      onRemove(product);
    } else {
      onAdd(product);
    }

    // if (cartItems.hasOwnProperty("qty")) {
    //   onRemove(product);
    // } else {
    //   onAdd(product);
    // }
  };

  return (
    // <div className="p-3 m-4">
    <div className={`p-3 m-4 ${selected && "bg-success"}`}>
      {/* <div className="col py-3 border-bottom border-end rounded-3 ms-2"> */}
      <div>
        <p>
          <button className="btn-light btn-sm " onClick={handleClickAdd}>
            Add to Sell
          </button>
        </p>
      </div>

      {/* <CartItem product={product} /> */}
    </div>
  );
}

export default AddToCart;
