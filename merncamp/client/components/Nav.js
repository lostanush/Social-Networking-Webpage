import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const [current, setCurrent] = useState("");
  const [state, setState] = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    process.borwser && setCurrent(window.location.pathname);
  }, [process.borwser && window.location.pathname]);
  console.log("current : ", current);

  const logout = () => {
    window.localStorage.removeItem("auth");
    setState(null);
    router.push("/login");
  };

  return (
    <nav className="nav d-flex justify-content-begin a">
      <Link className="nav-link logo text-light" href="/">
        MernCamp
      </Link>

      {state !== null ? (
        <>
          <Link className="nav-link text-light" href="/dashboard">
            {state && state.user && state.user.name}
          </Link>

          <a onClick={logout} className="nav-link text-light" href="/login">
            Logout
          </a>
        </>
      ) : (
        <>
          <Link className="nav-link text-light" href="/login">
            Login
          </Link>
          <Link className="nav-link text-light" href="/register">
            Register
          </Link>
        </>
      )}
    </nav>
  );
};

export default Nav;
