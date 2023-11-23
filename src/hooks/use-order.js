import { useContext } from "react";
import { OrderContext } from "../contexts/OrderContext";

export default function useOrder() {
    // const ctx = useContext(OrderContext);
    // console.log("order context", ctx);
    return useContext(OrderContext);
}