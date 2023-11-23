import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import useProduct from "../hooks/use-product";
import useOrder from "../hooks/use-order";
import { COOKING, PROCESSING } from "../utils/constant";
import { useEffect } from "react";
import axios from "axios";

export default function CartPage() {
  const [totalPrice, setTotalPrice] = useState(0);
  const { createProductList: productList } = useProduct();
  const { setCreateOrderList } = useOrder();

  const navigate = useNavigate();
  const { productId } = useParams();
  const getCurrentDate = () => {
    return moment().format("DD/MM/YYYY, h:mm:ss a");
  };

  const [productCheckout, setProductCheckOut] = useState({});

  useEffect(() => {
    axios.get(`/product/${productId}`).then((res) => {
      setProductCheckOut(res.data.productById);
    });
  }, []);

  const getTotalPrice = () => {
    let total = productList.reduce((curr, product) => {
      return (curr += product.price * product.amount);
    }, 0);
    setTotalPrice(total);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const initOrder = {
      totalPrice: totalPrice,
      slipURL: "",
      orderStatus: COOKING,
      paymentStatus: PROCESSING,
      orderDetail: [],
    };

    if (productList.length > 0) {
      productList.forEach((product) => {
        if (product.amount > 0) {
          let orderItem = {
            amount: product.amount,
            price: product.price,
            productId: product.id,
          };
          initOrder.orderDetail.push(orderItem);
        }
      });
    }

    console.log(initOrder, "initOrder");
    setCreateOrderList(productCheckout);
    navigate("/payment");
  };

  useEffect(() => {
    getTotalPrice();
  }, []);

  return (
    <div className=" bg-black min-h-screen">
      <div className="btn  btn-ghost text-2xl m-4 y-2 font-semibold">
        <button onClick={() => navigate("/product")}> &lt; Cart</button>
      </div>
      <div className="mx-auto max-w-2xl  bg-secondaryColor rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] mb-6 p-4">
        <div>{getCurrentDate()}</div>
        <br />
        <div>
          {/* {productList.map((product) => {
            if (product.amount > 0) {
              return (
                <div key={product.id} className="flex flex-row justify-between">
                  <div>
                    Burger {product.name} x {product.amount}
                  </div>
                  <div>{product.amount * product.price} Baht</div>
                </div>
              );
            } else {
              ("");
            }
          })} */}

          <div
            key={productCheckout.id}
            className="flex flex-row justify-between"
          >
            <div>{productCheckout.name}</div>
            <div>{productCheckout.price} Baht</div>
          </div>
        </div>
        <br />
        <div className="flex flex-row justify-between font-semibold">
          <div>Total price</div>
          <div>{productCheckout.price} Bath</div>
        </div>
      </div>

      <div className="flex justify-center m-4 y-2">
        <button
          className="btn btn-warning bg-[#ff8e00] text-2xl hover:bg-yellow-200 font-semibold"
          onClick={handleSubmit}
        >
          Check out
        </button>
      </div>
    </div>
  );
}
