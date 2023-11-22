import { Outlet } from "react-router-dom";
import HomeNav from "./header/HomeNavbar";

export default function Layout() {
  return (
    <>
      <HomeNav />
      <Outlet />
    </>
  );
}
