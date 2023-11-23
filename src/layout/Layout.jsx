import { Outlet } from "react-router-dom";
import HomeNav from "./header/HomeNavbar";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      {/* <HomeNav /> */}
      <Header />
      <Outlet />
    </>
  );
}
