import { Navigate, Route, Routes } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
// import HeaderAdmin from "../layouts/HeaderAdmin";

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import Catalogue from "../pages/Catalogue";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";

import Report from "../components/Report";
import Quotation from "../components/quotations/Quotation";
import QuotationList from "../components/quotations/QuotationList";

function RouteConfig() {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <>
      <Routes>
        {!user && (
          <Route path="/" element={<PublicLayout />}>
            <Route path="" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="catalogue-np" element={<Catalogue />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Route>
        )}
        {user?.userRole === "admin" && (
          <Route path="/" element={<AdminLayout />}>
            <Route path="" element={<Catalogue />} />

            <Route path="quotationlist" element={<QuotationList />} />
            <Route path="report" element={<Report />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        )}
        {user?.userRole === "user" && (
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Catalogue />} />

            <Route path="cart" element={<Cart />} />
            <Route path="contact" element={<Contact />} />
            <Route path="quotation" element={<Quotation />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        )}
      </Routes>
      )
    </>
  );
}

export default RouteConfig;
