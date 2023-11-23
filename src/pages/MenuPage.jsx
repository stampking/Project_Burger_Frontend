import { useEffect, useState } from "react";
import axios from "../config/axios";
import { useSubmit } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Navbar from "../layout/header/Navbar";
import useProduct from "../hooks/use-product";
import EditProductPage from "./EditProductPage";
export default function MenuPage() {
  const [allProduct, setAllProduct] = useState([]);
  const [isDisable, setDisable] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const { productList, getCreateProduct, setCreateProductList, getProduct } =
    useProduct();

  useEffect(() => {
    const init = async () => {
      try {
        getProduct();
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, []);

  console.log("productList", productList);

  const waitAndNavigate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/cart");
    }, 1000);
  };

  const checkCart = (productList) => {
    let checkCartList = false;

    productList.forEach((product) => {
      if (product.quantity !== 0) {
        checkCartList = true;
      }
    });

    if (checkCartList) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  // Press +
  const addAmount = (id) => {
    let index = productList.findIndex((item) => item.id === id);

    let newProductList = [...productList];
    let newProduct = { ...newProductList[index] };

    newProduct["quantity"] += 1;
    newProductList[index] = newProduct;

    setCreateProductList(newProductList);
    checkCart(newProductList);
  };

  // Press -
  const decreaseAmount = (id) => {
    let index = productList.findIndex((item) => item.id === id);

    if (productList[index].quantity === 0) {
      return;
    }

    let newProductList = [...productList];
    let newProduct = { ...newProductList[index] };

    newProduct["quantity"] -= 1;
    newProductList[index] = newProduct;

    setCreateProductList(newProductList);
    checkCart(newProductList);
  };
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
          {/* <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 "> */}
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-between py-6 ">
            {/* food */}
            {productList
              .filter((el) => el.productStatus !== "NOT AVAILABLE")
              .map((el) => (
                <ProductCard
                  key={el.id}
                  productId={el.id}
                  detail={el}
                  name={el.name}
                  image={el.image}
                  quantity={el.quantity}
                  add={addAmount}
                  minus={decreaseAmount}
                  price={el.price}
                />
              ))}
          </ul>
        </div>
      </div>
      <Navbar />
    </section>
  );
}
