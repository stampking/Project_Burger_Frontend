import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

import { useEffect } from "react";
import useOrder from "../hooks/use-order";

import RowShowOrder from "../components/RowShowOrder";

export default function OrderPage() {
  const navigate = useNavigate();

  const { orderList, getOrderByUserId } = useOrder();
  const { authUser } = useAuth();

  useEffect(() => {
    getOrderByUserId(authUser.id).catch((err) => {
      alert(err.response.data.message);
    });
  }, []);
  console.log(orderList);

  return (
    <div className=" bg-black min-h-screen">
      <div className="btn  btn-ghost text-2xl m-4 y-2 font-semibold bg-black">
        <button onClick={() => navigate("/cart")}> &lt; Order</button>
      </div>
      <div className="p-6 grid grid-cols-1 justify-center relative overflow-x-auto overflow-y-auto bg-black">
        <table className="table-auto bg-black w-full text-red-400">
          <thead>
            <tr className="text-center">
              <th className="px-6 py-3">Order No.</th>
              <th>Product Name</th>
              <th>Total Price</th>
              <th>Payment Status</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((order, index) => {
              return (
                <RowShowOrder
                  key={index}
                  id={order.id}
                  name={order.name}
                  amount={order.amount}
                  totalAmount={order.totalAmount}
                  paymentStatus={order.paymentStatus}
                  orderStatus={order.orderStatus}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center m-4 y-2">
        <button
          className="btn btn-primary btn-wide text-2xl hover:text-white bg-orange-400 hover:bg-orange-400 hover:bg-opacity-50 font-semibold"
          onClick={() => navigate("/menu")}
        >
          Back
        </button>
      </div>
    </div>
  );
}
