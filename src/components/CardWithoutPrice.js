import React from "react";

function CardWithoutPrice({ product }) {
  console.log(product);
  return (
    <div className="card" style={{ width: "20%" }}>
      <img src={product.product_img} alt="" />

      <p>BRAND: {product.Brand.brand_name}</p>
      <p>Model: {product.product_name} </p>

      <p>
        <button>Add to Cart</button>
      </p>
    </div>
  );
}

export default CardWithoutPrice;
