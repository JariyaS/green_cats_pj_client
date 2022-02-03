// import { createContext, useEffect, useState } from "react";
// import axios from "../config/axios";

// const MetalPriceContext = createContext();

// const login = async (email, password) => {
//     try {
//       const res = await axios.get("https://www.metals-api.com/api/latest", {
//         emailLogin: email,
//         password: password,
//       });
//       console.log(res.data);
//       setToken(res.data.token);
//       setUser(res.data.user);
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

//   const logout = () => {
//     clearToken();
//     setUser(null);
//   };

//   return (
//     <MetalPriceContext.Provider value={{ user, login, logout }}>
//       {children}
//     </MetalPriceContext.Provider>
//   );
// }

// export default MetalPriceContextProvider;
// export { MetalPriceContext };
