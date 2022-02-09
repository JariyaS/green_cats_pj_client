import { createContext, useEffect, useState } from "react";
import axios from "../config/axios";
import { clearToken, setToken, getToken } from "../services/localStorage";

const CartContext = createContext();

function CartContextProvider({ children }) {
  const [product, setProduct] = useState([]);
  // ใช้ useEffect เพื่อให้ทำงานเมื่อมีการส่งคำสั่งร้องขอข้อมูลไปที่ backend ในครั้งแรกครั้งเดียว
  // ขอข้อมูลผ่านทาง method get path : /products/withprice  โดยอัพเดท state (setState)
  // โดยให้ backend ส่งกลับมาในรูปบบ res.data.product
  useEffect(() => {
    axios
      .get("/products/withprice")
      .then((res) => {
        setProduct(res.data.product);
      })
      .catch((err) => console.log(err));
  }, []);

  const [cartItems, setCartItems] = useState([]);

  // add product.id in cart
  const onAdd = (product) => {
    console.log(product);
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

  const onRemove = (product) => {
    // console.log(product)
    const exist = cartItems.find((x) => x.id === product.id);
    const newCart = [...cartItems];
    if (exist.qty === 1) {
      // let newCart = cartItems.filter(x => x.id !== product.id))
      // setCartItems(newCart)
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id == product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  let total = [];
  let totalQty = 0;
  let totalOffer = [];

  // console.log(cartItems);
  const reCalculate = (cartItems) => {
    for (let item of cartItems) {
      let amount = +item.qty * +item.price;
      console.log(amount);
      total.push(amount);
      console.log(total);
      totalOffer = total.reduce((acc, result) => acc + result, 0).toFixed(2);

      totalQty += item.qty;
    }
    return { totalQty, totalOffer };
  };

  reCalculate(cartItems);

  // console.log(totalQty);

  return (
    <CartContext.Provider
      value={{
        product,
        cartItems,
        onAdd,
        onRemove,
        // bid,
        // setBid,
        reCalculate,
        totalQty,
        totalOffer,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartContextProvider;
export { CartContext };
