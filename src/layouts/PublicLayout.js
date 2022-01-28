import { Outlet } from "react-router-dom";
import HeaderGuest from "./HeaderGuest";

function PublicLayout() {
  return (
    <>
      <HeaderGuest />
      <Outlet />
    </>
  );
}

export default PublicLayout;
