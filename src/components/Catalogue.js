import React from "react";
import CardWithoutPrice from "./CardWithoutPrice";
import CardWithPrice from "./CardWithPrice";
import { useState, useEffect } from "react";
import axios from "../config/axios";

function Catalogue() {
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

  // return ค่าโดยการ map ทุก item/component ของ product ออกมา โดยส่งค่า value item ผ่านทาง props ที่ชื่อ product

  return (
    <>
      <div className="d-flex flex-wrap">
        {product.map((item) => (
          <CardWithoutPrice product={item} />
        ))}
      </div>
      {/* <div className="d-flex flex-wrap">
        {product.map((item) => (
          <CardWithPrice product={item} />
        ))}
      </div> */}
    </>
  );
}

export default Catalogue;
