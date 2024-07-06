import { useContext } from "react";
import { UserContext } from "../context";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { toast } from "react-toastify";
import AuthForm from "../components/forms/AuthForm";
import { useRouter } from "next/router";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [state, setState] = useContext(UserContext);

  const handleSubmit = async (x) => {
    x.preventDefault();

    try {
      setLoading(true);
      //console.log(name, email, password, secret);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/login`,
        {
          email,
          password,
        }
      );
      //update context
      setState({
        user: data.user,
        token: data.token,
      });
      //save in local storage
      window.localStorage.setItem("auth", JSON.stringify(data));
      //router
      console.log(data);
      router.push("/dashboard");
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row py-5 bg-default-img text-light">
        <div className="col text-center">
          <h1>Login Page : </h1>
        </div>
      </div>

      <div className="row ">
        <div className="col-md-6 offset-md-3">
          <AuthForm
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            loading={loading}
            page="login"
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p className="text-center">
            Not yet registered ? <Link href="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default login;
