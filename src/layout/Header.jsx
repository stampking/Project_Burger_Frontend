import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ADMIN, getRole } from "../utils/local-storage";
import { useAuth } from "../hooks/use-auth";
import { LuShoppingCart } from "react-icons/lu";

export default function Header() {
  const navigate = useNavigate();

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { authUser, logout } = useAuth();

  console.log("authUser", authUser);

  const handleLogout = () => {
    logout();
    navigate("");
  };

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="navbar  bg-secondaryColor bg-opacity-50">
      <div className="">
        <div className="navbar-start bg-secondaryColor">
          <div className="drawer">
            <div className="drawer-content bg-secondaryColor">
              <span
                className="btn btn-ghost normal-case text-xl hover:bg-transparent hover:text-white"
                onClick={() => navigate("/menu")}
              >
                BURGER
              </span>
            </div>

            <div className="drawer-side z-10  bg-secondaryColor">
              <label
                htmlFor="menu-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              />

              {/* {getRole() === ADMIN ? ( */}
              {authUser?.role === ADMIN ? (
                <ul
                  className="menu p-4 w-full min-h-full bg-base-200 text-base-content font-semibold flex flex-row gap-4  bg-secondaryColor"
                  onClick={toggleDrawer}
                >
                  <li onClick={() => navigate("/product/create")}>
                    <a>Create Product</a>
                  </li>
                  <li onClick={() => navigate("/product/edit")}>
                    <a>Edit Product</a>
                  </li>
                  <li onClick={() => navigate("/menu")}>
                    <a>Menu</a>
                  </li>
                  <li onClick={() => navigate("/order/edit")}>
                    <a>Edit Order</a>
                  </li>
                </ul>
              ) : (
                <ul
                  className="menu p-4 w-80 min-h-full bg-base-200 text-base-content font-semibold "
                  onClick={toggleDrawer}
                >
                  <li
                    onClick={() => {
                      navigate("/menu");
                    }}
                  >
                    <a>Product</a>
                  </li>

                  <li onClick={() => navigate("/order")}>
                    <a>Order</a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div onClick={handleLogout} className="cursor-pointer">
            <li>
              <a className="nav__link hover:text-secondaryColor ease-in duration-200">
                Logout
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
