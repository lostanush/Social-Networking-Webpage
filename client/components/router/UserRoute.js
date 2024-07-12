import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import axios from "axios";

const UserRoute = ({ children }) => {
  const [ok, setOk] = useState(null);
  const router = useRouter();
  const [state] = useContext(UserContext);

  useEffect(() => {
    if (state && state.token) getCurrentUser();
  }, state && [state.token]);

  const getCurrentUser = async () => {
    try {
      const { data } = await axios.get(`/current-user`);
      if (data.ok) setOk(true);
      else {
        setOk(false);
        router.push("/login");
      }
    } catch (err) {
      console.error("Error fetching current user:", err);
      router.push("/login");
    }
  };

  if (ok === null) {
    return "Loading...";
  }

  return ok ? <>{children}</> : null;
};

export default UserRoute;
