import { Outlet } from "react-router-dom";

import HeaderUser from "./HeaderUser";

function MainLayout() {
  return (
    <>
      <HeaderUser />
      <Outlet />
    </>
  );
}

export default MainLayout;
