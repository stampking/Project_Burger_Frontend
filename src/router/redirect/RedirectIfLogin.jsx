import { Navigate } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
import { useAuth } from "../../hooks/use-auth";

export default function RedirectIfLogin({ children }) {
  const { user } = useAuth();
  if (user) {
    return <Navigate to={`/menu`} />;
  }
  return children;
}
