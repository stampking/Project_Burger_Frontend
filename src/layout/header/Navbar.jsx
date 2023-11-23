import { GrFormClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuShoppingCart } from "react-icons/lu";
import { useAuth } from "../../hooks/use-auth";
import { useNavigate } from "react-router-dom";
// import { PiMoon } from "react-icons/pi";

export default function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("");
  };
  return (
    <div className=" bg-blackColor fixed top-0 left-0 w-full z-50">
      <nav className="container relative h-14 flex justify-between items-center">
        <div>
          <a className="text-2xl uppercase font-oswald ">
            Bur<span className="text-secondaryColor ">ger</span>
          </a>
        </div>

        <div
          className=" hidden absolute top-0 left-0 w-full py-14 bg-primaryColor dark:bg-darkColor border-b border-secondaryColor md:block md:static md:py-0 md:border-none md:w-auto md:ml-auto "
          id="nav-menu"
        >
          <ul className="flex flex-col text-center gap-5 md:flex-row">
            <li>
              <a className="nav__link hover:text-secondaryColor ease-in duration-200">
                Home
              </a>
            </li>
            <li>
              <a className="nav__link hover:text-secondaryColor ease-in duration-200">
                Menu
              </a>
            </li>
            <li>
              <a className="nav__link hover:text-secondaryColor ease-in duration-200">
                About Us
              </a>
            </li>

            <li>
              <a className="nav__link hover:text-secondaryColor ease-in duration-200">
                <LuShoppingCart className=" text-xl" />
              </a>
            </li>
            <div onClick={handleLogout} className="cursor-pointer">
              <li>
                <a className="nav__link hover:text-secondaryColor ease-in duration-200">
                  Logout
                </a>
              </li>
            </div>
          </ul>

          <div
            className="absolute top-[0.7rem] right-4 text-2xl cursor-pointer md:hidden"
            id="nav-close"
          >
            <GrFormClose />
          </div>
        </div>

        <div className=" flex items-center gap-5">
          {/* <PiMoon className=" cursor-pointer ml-4 text-xl" /> */}
          <div className="md:hidden" id="hamburger">
            <GiHamburgerMenu className="cursor-pointer ml-4 text-xl" />
          </div>
        </div>
      </nav>
    </div>
  );
}
