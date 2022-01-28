import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";
import axios from "../config/axios";

function Catalogue() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setProduct(res.data.product))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="d-flex flex-wrap">
        {product.map((item) => (
          <Card product={item} />
        ))}
      </div>
    </>
  );
}

export default Catalogue;
