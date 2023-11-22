import { useAuth } from "../hooks/use-auth";
import { Navigate } from "react-router-dom";

export default function Authenticated() {
  const { authUser } = useAuth();

  if (!authUser) {
    return <Navigate to="/login" />;
  }
  return;
}
