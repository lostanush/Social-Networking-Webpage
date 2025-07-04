/**
 * Nav Component
 * This component renders the navigation bar for the application.
 * It includes links to the home page, login, register, and user dashboard/profile.
 * It also handles user authentication state and logout functionality.
 *  
 */

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
      // console.log("Current Path:", curr);
      console.log("State :", state);
      console.log("Hello")
      setCurrent(curr);
    }
  }, [router.asPath]);

  const logout = () => {
    window.localStorage.removeItem("auth");
    setState(null);
    router.push("/login");
  };

  return (
    <nav className="nav d-flex justify-content-between align-items-center  p-1">
      <Link
        href="/"
        className={`nav-link ${current === "/" ? "active" : " logo"}`}
      >
        <b>MernCamp</b>
      </Link>

      {state && state.token !== "" ? (
        <>
          <div className="dropdown">
            <a
              className="btn dropdown-toggle text-light "
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {state && state.user && state.user.name}
            </a>
            <ul className="dropdown-menu ">
              <li>
                <Link
                  href="/users/dashboard"
                  className={`nav-link text-dark dropdown-item ${
                    current === "/users/dashboard" ? "active" : ""
                  }`}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/users/profile/update"
                  className={`nav-link text-dark dropdown-item ${
                    current === "/users/profile/update" ? "active" : ""
                  }`}
                >
                  Profile
                </Link>
              </li>
              <li>
                <a
                  onClick={logout}
                  className="nav-link text-dark"
                  href="/login"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
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
