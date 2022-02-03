import { Navigate, Route, Routes } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
// import HeaderAdmin from "../layouts/HeaderAdmin";

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import CatalogueWithoutPrice from "../pages/CatalogueWithoutPrice";
import CatalogueWithPrice from "../pages/CatalogueWithPrice";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import ApproveList from "../components/ApproveList";
import Report from "../components/Report";
import Quotation from "../components/Quotation";

function RouteConfig() {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      {!user && (
        <Route path="/" element={<PublicLayout />}>
          <Route path="" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="catalogue-np" element={<CatalogueWithoutPrice />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      )}
      {user?.userRole === "admin" && (
        <Route path="/" element={<AdminLayout />}>
          <Route path="" element={<CatalogueWithPrice />} />

          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="approvelist" element={<ApproveList />} />
          <Route path="report" element={<Report />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      )}
      {user?.userRole === "user" && (
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<CatalogueWithPrice />} />

          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="quotation" element={<Quotation />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      )}
    </Routes>
  );
}

export default RouteConfig;
