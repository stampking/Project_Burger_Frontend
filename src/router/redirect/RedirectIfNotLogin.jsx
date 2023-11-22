import { Navigate } from "react-router-dom";
// import useAuth from "../../Contexts/AuthContext";
import { useAuth } from "../../hooks/use-auth";

export default function RedirectIfNotLogin({ children }) {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to={`/login`} />;
  }
  return children;
}
