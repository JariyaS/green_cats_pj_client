import React from "react";
import CardWithPrice from "./CardWithPrice";
import CartItem from "./CartItem";
import CardForCartItem from "./CardForCartItem";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

import { useState, useEffect } from "react";
import axios from "../config/axios";
import CardWithPriceAdmin from "./CardWithPriceAdmin";

function CatalogueWp() {
  const { onAdd, product } = useContext(CartContext);

  return (
    <div className="p-3">
      <div className="d-flex flex-wrap">
        {product.map((item) => (
          <CardWithPriceAdmin product={item} key={item.id} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
}

export default CatalogueWp;
