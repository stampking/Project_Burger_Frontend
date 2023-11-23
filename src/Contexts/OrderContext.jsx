import { createContext, useState } from "react";
import axios from "../config/axios";

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
  const [orderList, setOrderList] = useState([]);
  const [createOrderList, setCreateOrderList] = useState([]);
  const [success, setSuccess] = useState(null);

  console.log(createOrderList);
  const getOrder = async () => {
    const res = await axios.get("/order");
    setOrderList(res.data.orders);
  };
  console.log(orderList);

  const createOrder = async (input) => {
    console.log(input, "showinput");
    const res = await axios.post("/order/create", input);
    setSuccess(res.data.createOrder);
  };

  const updateOrderStatusById = async (id, status) => {
    const res = await axios.patch(`/order/update/order-status/${id}`, {
      orderStatus: status,
    });
    setSuccess(res.data);
  };

  const updatePaymentStatusById = async (id, status) => {
    const res = await axios.patch(`/payment/update/payment-status/${id}`, {
      paymentStatus: status,
    });
    setSuccess(res.data);
  };

  const getOrderByUserId = async (input) => {
    const res = await axios.get(`/order/${input}`);
    setOrderList(res.data.order);
  };

  return (
    <OrderContext.Provider
      value={{
        getOrder,
        createOrder,
        updateOrderStatusById,
        updatePaymentStatusById,
        getOrderByUserId,
        setOrderList,
        orderList,
        setCreateOrderList,
        createOrderList,
        success,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
