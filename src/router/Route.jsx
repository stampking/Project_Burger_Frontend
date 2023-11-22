import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import { AuthContext } from "../Contexts/AuthContext";
import Layout from "../layout/Layout";
// import CartPage from "../pages/CartPage";
import RedirectIfNotLogin from "./redirect/RedirectIfNotLogin";
import MenuPage from "../pages/MenuPage";
import RedirectIfLogin from "./redirect/RedirectIfLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "menu", element: <MenuPage /> },
      // { path: "cart", element: <CartPage /> },
      {
        path: "register",

        element: (
          <RedirectIfLogin>
            <RegisterPage />
          </RedirectIfLogin>
        ),
      },
      {
        path: "login",
        element: (
          <RedirectIfNotLogin>
            <LoginPage />
          </RedirectIfNotLogin>
        ),
      },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
