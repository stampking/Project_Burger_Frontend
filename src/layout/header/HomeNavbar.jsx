import { Link } from "react-router-dom";

export default function HomeNav() {
  return (
    <div className=" bg-blackColor fixed top-0 left-0 w-full z-50">
      <nav className="container relative h-14 flex justify-between items-center">
        <div>
          <a href="#" className="text-2xl uppercase font-oswald ">
            Bur<span className="text-secondaryColor ">ger</span>
          </a>
        </div>

        <div
          className=" hidden absolute top-0 left-0 w-full py-14 bg-primaryColor dark:bg-darkColor border-b border-secondaryColor md:block md:static md:py-0 md:border-none md:w-auto md:ml-auto "
          id="nav-menu"
        >
          <div className="flex flex-col text-center gap-5 md:flex-row">
            <Link to="">
              <p className="nav__link hover:text-secondaryColor ease-in duration-200">
                Home
              </p>
            </Link>
            <Link to="/login">
              <p className="nav__link hover:text-secondaryColor ease-in duration-200">
                Login
              </p>
            </Link>
            <Link to="/register">
              <a className="nav__link hover:text-secondaryColor ease-in duration-200">
                Register
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
