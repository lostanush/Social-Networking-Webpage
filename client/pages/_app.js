import { UserProvider } from "../context";
import Nav from "../components/Nav";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/reset.css";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Nav />
      <ToastContainer position="top-center" />

      {/* <div style={{ backgroundColor: "grey" }}> */}
      <Component {...pageProps} />
      {/* // </div> */}
    </UserProvider>
  );
};

export default MyApp;
