import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const [current, setCurrent] = useState("");
  const [state, setState] = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const curr = window.location.pathname;
      setCurrent(curr);
    }
  }, [router.asPath]);

  const logout = () => {
    window.localStorage.removeItem("auth");
    setState(null);
    router.push("/login");
  };

  return (
    <nav className="nav d-flex justify-content-start">
      <Link
        href="/"
        className={`nav-link  ${current === "/" ? "active" : " logo"}`}
      >
        <b>MernCamp</b>
      </Link>
      {state && state.token !== "" ? (
        <>
          <Link
            href="/users/dashboard"
            className={`nav-link ${
              current === "/users/dashboard" ? "active" : ""
            }`}
          >
            {state && state.user && state.user.name}
          </Link>

          <a onClick={logout} className="nav-link" href="/login">
            Logout
          </a>
        </>
      ) : (
        <>
          <Link
            href="/login"
            className={`nav-link ${current === "/login" ? "active" : ""}`}
          >
            Login
          </Link>
          <Link
            href="/register"
            className={`nav-link ${current === "/register" ? "active" : ""}`}
          >
            Register
          </Link>
        </>
      )}
      {state && state.token === "" ? (
        <>
          <Link
            href="/users/forgot-password"
            className={`
          nav-link ${current === "/users/forgot-password" ? "active" : ""}`}
          >
            ForgetPassword
          </Link>
        </>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Nav;
