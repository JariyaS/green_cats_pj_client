import React, { useState, useContext } from "react";
import axios from "../config/axios";
import CartContextProvider from "../contexts/CartContext";
import { CartContext } from "../contexts/CartContext";
import { AuthContext } from "../contexts/AuthContext";
import AddToCart from "./AddToCart";
import CartItem from "./CartItem";
// import CatalogueWp from "./CatalogueWp";

function CardProduct({ product, onAdd }) {
  // console.log(product);
  const { user } = useContext(AuthContext);
  const [deleteProduct, setDeleteProduct] = useState(null);
  // console.log(user);
  const onDeleteProduct = async () => {
    await axios.delete(`/products/${product.id}`);
  };

  return (
    <>
      <div className="card" style={{ width: "20%" }}>
        <img src={product.productImg} alt="" />

        <p>BRAND: {product.brand}</p>
        <p>Model: {product.productName} </p>
        {user && user.userRole === "user" && (
          <>
            <p>Offer Price : {product.price} $</p>

            <AddToCart product={product} key={product.id} onAdd={onAdd} />
          </>
        )}
        {user && user.userRole === "admin" && (
          <>
            <p>Offer Price : {product.price} $</p>
            <button
              className="add btn btn-success btn-block"
              onClick={onDeleteProduct}
            >
              Delete
            </button>
            <button className="btn btn-info btn-block">Update</button>
          </>
        )}
      </div>
    </>
  );
}

export default CardProduct;
