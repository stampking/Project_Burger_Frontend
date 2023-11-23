import { Navigate } from "react-router-dom";
// import useAuth from "../../hooks/use-auth";
import { addRole } from "../../utils/local-storage";
import { useAuth } from "../../hooks/use-auth";

export default function RedirectIfAuthen({ children }) {
  const { authUser } = useAuth();

  if (authUser?.role === "USER") {
    return <Navigate to="/menu" />;
  }
  if (authUser?.role === "ADMIN") {
    return <Navigate to="/order/edit" />;
  }

  return children;
}
