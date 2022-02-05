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
  const [selected, setSelected] = useState(false);

  const handleClickAdd = () => {
    setSelected((prv) => !prv);
    onAdd(product);
  };

  return (
    <div className="p-3 m-4">
      {/* <div className="col py-3 border-bottom border-end rounded-3 ms-2"> */}
      <div className={`fs-5 ${selected && "bg-success"}`}>
        <p>
          <button className="btn-light btn-sm" onClick={handleClickAdd}>
            Add to Sell
          </button>
        </p>
      </div>

      {/* <CartItem product={product} /> */}
    </div>
  );
}

export default AddToCart;
