import React from "react";
import CardWithoutPrice from "./CardWithoutPrice";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import SearchCatalogue from "./SearchCatalogue";

import { useState, useEffect } from "react";
import axios from "../config/axios";
import searchCatalogue from "../components/SearchCatalogue";
function CatalogueNp() {
  // initial state = []
  const { product } = useContext(CartContext);

  return (
    <div>
      <SearchCatalogue />
      <div className="p-3">
        <div className="d-flex flex-wrap">
          {product.map((item) => (
            <CardWithoutPrice product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CatalogueNp;
