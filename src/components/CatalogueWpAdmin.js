import React from "react";

import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

import CardWithPriceAdmin from "./CardWithPriceAdmin";
import SearchCatalogue from "./SearchCatalogue";

function CatalogueWp() {
  const { onAdd, product } = useContext(CartContext);

  return (
    <>
      <SearchCatalogue />
      <div className="p-3">
        <div className="d-flex flex-wrap">
          {product.map((item) => (
            <CardWithPriceAdmin product={item} key={item.id} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CatalogueWp;
