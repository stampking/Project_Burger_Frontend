// // import axios from "../config/axios";
// // import { createContext, useEffect, useState } from "react";
// // import {
// //   addAccessToken,
// //   getAccessToken,
// //   removeAccessToken,
// // } from "../utils/Local-storage";

// // export const AuthContext = createContext();

// // export default function AuthContextProvider({ children }) {
// //   const [authUser, setAuthUser] = useState(null);
// //   // const [initialLoading, setInitialLoading] = useState(true);

// //   useEffect(() => {
// //     if (getAccessToken()) {
// //       axios
// //         .get("/auth/me")
// //         .then((res) => {
// //           setAuthUser(res.data.user);
// //         })
// //         .finally(() => {
// //           // setInitialLoading(false);
// //         });
// //     } else {
// //       // setInitialLoading(false);
// //     }
// //   }, []);

// //   const login = async (credential) => {
// //     try {
// //       const res = await axios.post("/auth/login", credential);
// //       console.log(res.data);
// //       addAccessToken(res.data.accessToken);
// //       setAuthUser(res.data.user);
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   const register = async (registerInputObject) => {
// //     const res = await axios.post("/auth/register", registerInputObject);
// //     addAccessToken(res.data.accessToken);
// //     setAuthUser(res.data.user);
// //   };

// //   const logout = () => {
// //     removeAccessToken();
// //     setAuthUser(null);
// //   };

// //   return (
// //     <AuthContext.Provider value={{ login, authUser, register, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // }

// import { createContext, useEffect, useState } from "react";
// import axios from "../config/axios";
// import {
//   addAccessToken,
//   getAccessToken,
//   removeAccessToken,
//   removeRole,
// } from "../utils/Local-storage";

// export const AuthContext = createContext();

// export default function AuthContextProvider({ children }) {
//   const [user, setUser] = useState(null);

//   const [loding, setLoading] = useState(true);

//   useEffect(() => {
//     if (getAccessToken()) {
//       axios.get("auth/me").then((res) => {
//         setAuthUser(res.data.user)
//           .catch((err) => console.log(err))
//           .finally(() => setLoading(false));
//       });
//     } else {
//       setLoading(false);
//     }
//   }, []);

//   const register = async (registerInput) => {
//     const res = await axios.post("/auth/register", registerInput);
//     addAccessToken(res.data.accessToken);
//     setAuthUser(res.data.user);
//   };

//   const login = async (loginInput) => {
//     const res = await axios.post("/auth/login", loginInput);
//     addAccessToken(res.data.accessToken);
//     setAuthUser(res.data.user);
//   };

//   const logout = () => {
//     removeAccessToken();
//     removeRole();
//     setAuthUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ login, register, logout, authUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

import { createContext, useEffect, useState } from "react";
import axios from "../config/axios";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
  removeRole,
} from "../utils/Local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    if (getAccessToken()) {
      axios.get("auth/me").then((res) => {
        setAuthUser(res.data.user);
      });
    }
  }, []);

  const login = async (loginInput) => {
    const res = await axios.post("/auth/login", loginInput);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const register = async (registerInput) => {
    const res = await axios.post("/auth/register", registerInput);
    addAccessToken(res.data.accessToken);
    console.log(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const logout = () => {
    removeAccessToken();
    removeRole();
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider value={{ login, register, logout, authUser }}>
      {children}
    </AuthContext.Provider>
  );
}
