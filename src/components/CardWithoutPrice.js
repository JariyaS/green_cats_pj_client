import React from "react";

function CardWithoutPrice({ product }) {
  console.log(product);
  return (
    <div className="card" style={{ width: "20%" }}>
      <img src={product.productImg} alt="" />

      <p>BRAND: {product.brand}</p>
      <p>Model: {product.productName} </p>
    </div>
  );
}

export default CardWithoutPrice;
