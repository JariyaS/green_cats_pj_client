import React, { useState } from "react";
import CardProduct from "./CardProduct";

import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import Pagination from "../layouts/Pagination";

// import { useState, useEffect } from "react";
// import axios from "../config/axios";

function CatalogueWp() {
  const { onAdd, product, loadProduct } = useContext(CartContext);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);

  //set state of current page
  const paginate = (number) => setCurrentPage(number);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = product.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <>
      <div className="p-3">
        <div className="d-flex flex-wrap">
          {currentProducts.map((item) => (
            <CardProduct
              product={item}
              key={item.id}
              onAdd={onAdd}
              loadProduct={loadProduct}
            />
          ))}
        </div>
        <Pagination
          productsPerpage={productsPerPage}
          totalProducts={product.length}
          paginate={paginate}
        />
      </div>
    </>
  );
}

export default CatalogueWp;
