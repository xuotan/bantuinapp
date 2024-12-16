// // hooks/useAuth.js
// import { useState, useEffect } from "react";

// export const useAuth = () => {
//   const [user, setUser] = useState(null);
//   const [jwt, setJwt] = useState(localStorage.getItem("jwt"));

//   useEffect(() => {
//     if (jwt) {
//       const fetchUser = async () => {
//         const response = await fetch("/api/users/me", {
//           headers: {
//             Authorization: `Bearer ${jwt}`,
//           },
//         });
//         const data = await response.json();
//         setUser(data);
//       };
//       fetchUser();
//     }
//   }, [jwt]);

//   return { user, jwt };
// };
