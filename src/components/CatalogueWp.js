import React from "react";
import CardWithPrice from "./CardWithPrice";
import CartItem from "./CartItem";
import CardForCartItem from "./CardForCartItem";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

import { useState, useEffect } from "react";
import axios from "../config/axios";

function CatalogueWp() {
  const { onAdd } = useContext(CartContext);
  // initial state = []
  const [product, setProduct] = useState([]);
  // ใช้ useEffect เพื่อให้ทำงานเมื่อมีการส่งคำสั่งร้องขอข้อมูลไปที่ backend ในครั้งแรกครั้งเดียว
  // ขอข้อมูลผ่านทาง method get path : /product  โดยอัพเดท state (setState)
  // โดยให้ backend ส่งกลับมาในรูปบบ res.data.product
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
          <CardWithPrice product={item} key={item.id} onAdd={onAdd} />
        ))}
      </div>
    </>
  );
}

export default CatalogueWp;
