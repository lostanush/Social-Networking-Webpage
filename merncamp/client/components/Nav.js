import { useContext } from "react";
import { UserContext } from "../context";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const [state, setState] = useContext(UserContext);
  const router = useRouter();

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

      <Link className="nav-link text-light" href="/login">
        Login
      </Link>

      <Link className="nav-link text-light" href="/register">
        Register
      </Link>

      <a onClick={logout} className="nav-link text-light" href="/login">
        Logout
      </a>
    </nav>
  );
};

export default Nav;
