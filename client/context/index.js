import { useState, createContext, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    user: {},
    token: "",
  });
  const router = useRouter();

  useEffect(() => {
    const auth = JSON.parse(window.localStorage.getItem("auth"));
    if (auth) {
      setState(auth);
    }
    console.log(state);
  }, []);

  const token = state && state.token ? state.token : "";
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      let res = error.response;
      if (res.status === 401 && !res.config._isRetryRequest) {
        setState(null);
        window.localStorage.removeItem("auth");
        router.push("/");
      }
      return Promise.reject(error);
    }
  );

  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
