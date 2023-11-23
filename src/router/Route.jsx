// import { RouterProvider, createBrowserRouter } from "react-router-dom";

// import LoginPage from "../pages/LoginPage";
// import HomePage from "../pages/HomePage";
// import RegisterPage from "../pages/RegisterPage";
// import { AuthContext } from "../Contexts/AuthContext";
// import Layout from "../layout/Layout";
// // import CartPage from "../pages/CartPage";
// import RedirectIfNotLogin from "./redirect/RedirectIfNotLogin";
// import MenuPage from "../pages/MenuPage";
// import RedirectIfLogin from "./redirect/RedirectIfLogin";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "", element: <HomePage /> },
//       { path: "menu", element: <MenuPage /> },
//       // { path: "cart", element: <CartPage /> },
//       {
//         path: "register",

//         element: (
//           <RedirectIfLogin>
//             <RegisterPage />
//           </RedirectIfLogin>
//         ),
//       },
//       {
//         path: "login",
//         element: (
//           <RedirectIfNotLogin>
//             <LoginPage />
//           </RedirectIfNotLogin>
//         ),
//       },
//     ],
//   },
// ]);

// export default function Route() {
//   return <RouterProvider router={router} />;
// }

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { getRole, ADMIN } from "../utils/local-storage";
import Authenticated from "../auth/Authenticated";
import RedirectIfAuthen from "./redirect/RedirectIfAuthen";
import Layout from "../layout/Layout";
import MenuPage from "../pages/MenuPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import PaymentPage from "../pages/PaymentPage";
import RegisterPage from "../pages/RegisterPage";
import CreateProductPage from "../pages/CreateProductPage";
import EditOrderPage from "../pages/EditOrderPage";
import OrderPage from "../pages/OrderPage";
import NotAuthorized from "../pages/NotAuthorized";
import NotFound from "../pages/NotFound";
import EditProductPage from "../pages/EditProductPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "/",
    element: (
      <Authenticated>
        <Layout />
      </Authenticated>
    ),
    children: [
      {
        path: "cart/:productId",
        element: <CartPage />,
      },
      {
        path: "payment",
        element: <PaymentPage />,
      },
      {
        path: "order",
        element: <OrderPage />,
      },
      // {
      //   path: "order/edit",
      //   element: getRole() === ADMIN ? <EditOrderPage /> : <NotAuthorized />,
      // },
      {
        path: "order/edit",
        element: <EditOrderPage />,
      },
      {
        path: "menu",
        element: <MenuPage />,
      },
      // {
      //   path: "product/create",
      //   element:
      //     getRole() === ADMIN ? <CreateProductPage /> : <NotAuthorized />,
      // },
      {
        path: "product/create",
        element: <CreateProductPage />,
      },
      {
        path: "product/create",
        element: <CreateProductPage />,
      },
      // {
      //   path: "product/edit",
      //   element: getRole() === ADMIN ? <EditProductPage /> : <NotAuthorized />,
      // },
      {
        path: "product/edit",
        element: <EditProductPage />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/login",
    element: (
      <RedirectIfAuthen>
        <LoginPage />,
      </RedirectIfAuthen>
    ),
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
