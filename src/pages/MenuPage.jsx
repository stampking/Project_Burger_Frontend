import { useEffect, useState } from "react";
import axios from "../config/axios";
// import { useSubmit } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Navbar from "../layout/header/Navbar";

export default function MenuPage() {
  const [allProduct, setAllProduct] = useState([]);
  useEffect(() => {
    axios
      .get("/product/allProducts")
      .then((res) => setAllProduct(res.data.product))
      .catch((err) => console.log(err));
  }, []);

  console.log(allProduct);
  return (
    <section id="menu">
      <div className="container">
        <div className="max-w-md mx-auto text-center">
          <h2>OUR BEST MENU</h2>
          <div className="separator mx-auto"></div>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            illum debitis doloremque aut eos quos velit ducimus nisi impedit,
            minus aliquid quas porro, minima veniam inventore reprehenderit
            corporis suscipit consequuntur!
          </p>
          <div className="tabs_wrap">
            <ul className="flex  justify-center gap-3 py-10">
              <li className=" btn btn-primary ">All</li>
              <li className="btn btn-primary">Food</li>
              <li className="btn btn-primary">Snack</li>
              <li className="btn btn-primary">Berevage</li>
            </ul>
          </div>
        </div>
        <div>
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {/* food */}
            {allProduct.map((el) => (
              <ProductCard key={el.id} detail={el} />
            ))}
          </ul>
        </div>
      </div>
      <Navbar />
    </section>
  );
}
