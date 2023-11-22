// import { Navigate } from "react-router-dom";
// import useAuth from "../../hooks/use-auth";
// import { addRole } from "../../utils/Local-storage";

// export default function RedirectIfAuthen({ children }) {
//   const { authUser } = useAuth();

//   if (authUser?.role) {
//     addRole(authUser.role);

//     if (authUser?.role === "USER") {
//       return <Navigate to="/menu" />;
//     }

//     if (authUser?.role === "ADMIN") {
//       return <Navigate to="/product/edit" />;
//     }
//   }

//   return children;
// }
