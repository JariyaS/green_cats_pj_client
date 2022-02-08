import React from "react";
import CardProduct from "./CardProduct";
import CartItem from "./CartItem";
import CardForCartItem from "./CardForCartItem";

import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import SearchCatalogue from "./SearchCatalogue";

import { useState, useEffect } from "react";
import axios from "../config/axios";

function CatalogueWp() {
  const { onAdd, product } = useContext(CartContext);

  return (
    <>
      <SearchCatalogue />

      <div className="p-3">
        <div className="d-flex flex-wrap">
          {product.map((item) => (
            <CardProduct product={item} key={item.id} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CatalogueWp;
