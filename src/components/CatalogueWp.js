import React from "react";
import CardWithPrice from "./CardWithPrice";
import CartItem from "./CartItem";

import { useState, useEffect } from "react";
import axios from "../config/axios";

function CatalogueWp() {
  // initial state = []
  const [product, setProduct] = useState([]);
  // ใช้ useEffect เพื่อให้ทำงานเมื่อมีการส่งคำสั่งร้องขอข้อมูลไปที่ backend ในครั้งแรกครั้งเดียว
  // ขอข้อมูลผ่านทาง method get path : /product  โดยอัพเดท state (setState)
  // ให้มีค่าเท่ากับ res.data.product ที่ backend ส่งกลับมา
  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setProduct(res.data.product))
      .catch((err) => console.log(err));
  }, []);

  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const idx = cartItems.findIndex((x) => x.id === product.id); //เช็คว่ามี ID นั้นๆหรือยัง
    const newCart = [...cartItems];
    if (idx !== -1) {
      newCart[idx] = { ...newCart[idx], qty: newCart[idx].qty + 1 };
    } else {
      newCart.push({ ...product, qty: 1 });
      console.log(newCart);
    }

    setCartItems(newCart);
  };

  // return ค่าโดยการ map ทุก item/component ของ product ออกมา โดยส่งค่า value item ผ่านทาง props ที่ชื่อ product

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
