import { GiForkKnifeSpoon } from "react-icons/gi";
import { MdOutlineWaterDrop } from "react-icons/md";
import { LuLeafyGreen } from "react-icons/lu";

// import Category from "../layout/Category";
import AboutPage from "./AboutPage";
// import Menu from "./MenuPage";
// import Cart from "./CartPage";
// import Contact from "./Contact";
import Footer from "./FooterPage";

// import RegisterPage from "./RegisterPage";
// import LoginPage from "./LoginPage";

import HomeNav from "../layout/header/HomeNavbar";
export default function HomePage() {
  return (
    <section>
      <div className=" container flex flex-col items-center gap-10 md:flex-row">
        <div className="mx-auto md:basis-1/2 lg:basis-2/5  animate-movingY">
          <img
            className=" w-60 md:w-full"
            src="/img/home-image.png"
            alt="home image"
          />
        </div>

        <div className="text-center md:basis-1/2 md:text-start lg:basis-3/5">
          <h1 className="home__title">HAPPY TUMMY TASTY BURGERS.</h1>
          <div className="separator mx-auto "></div>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            necessitatibus doloremque cupiditate doloribus porro ullam nam
            accusamus deleniti aut optio vel suscipit consequuntur eaque, esse
            iusto hic inventore, aperiam illum.
          </p>
          <div className="text-base flex items-center justify-center gap-4 py-10 md:justify-start md:gap-20">
            <div className="text-center">
              <GiForkKnifeSpoon className=" text-secondaryColor text-4xl" />
              <br />
              Delicious
            </div>
            <div className="text-center">
              <MdOutlineWaterDrop className=" text-secondaryColor text-4xl" />
              <br />
              Fresh
            </div>
            <div className=" text-center">
              <LuLeafyGreen className=" text-secondaryColor text-4xl" />
              <br />
              Organic
            </div>
          </div>

          <a href="#" className=" btn btn-primary">
            learn more
          </a>
        </div>
      </div>
      {/* <Category /> */}
      <AboutPage />
      {/* <Menu /> */}

      {/* <Contact /> */}
      <Footer />
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}

      <HomeNav />
      {/* <Cart /> */}
    </section>
  );
}
