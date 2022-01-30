// import { createContext, useEffect, useState } from "react";
// import axios from "../config/axios";
// import { clearToken, setToken, getToken } from "../services/localStorage";

// const CartContext = createContext();

// function CartContextProvider({ children, product }) {
//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     if (getToken()) {
//       axios
//         .get("/users/cart")
//         .then((res) => setUser(res.data.product))
//         .catch((err) => console.log(err));
//     }
//   }, []);
//   // const cartItem = async (productId, productName, productPrice) => {
//   //   try {
//   //     const res = await axios.post("/products", {
//   //       productId: productId,
//   //       productName: productName,
//   //       productPrice: productPrice,
//   //     });
//   //     console.log(res.data);

//   //     setCart(res.data.product);
//   //   } catch (err) {
//   //     console.log(err.message);
//   //   }
//   // };

//   return (
//     <CartContext.Provider value={{ product }}>{children}</CartContext.Provider>
//   );
// }

// export default CartContextProvider;
// export { CartContext };
