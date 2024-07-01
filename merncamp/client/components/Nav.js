import Link from "next/link";

const Nav = () => {
  return (
    <nav
      className="nav d-flex justify-content-end"
      style={{ backgroundColor: "blue" }}
    >
      <Link className="nav-link text-light" href="/">
        Home
      </Link>

      <Link className="nav-link text-light" href="/login">
        Login
      </Link>

      <Link className="nav-link text-light" href="/register">
        Register
      </Link>
    </nav>
  );
};

export default Nav;
