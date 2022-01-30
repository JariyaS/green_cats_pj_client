import { Outlet } from "react-router-dom";

import HeaderAdmin from "./HeaderAdmin";

function AdminLayout() {
  return (
    <>
      <HeaderAdmin />
      <Outlet />
    </>
  );
}

export default AdminLayout;
