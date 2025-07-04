import axios from "axios";
import Link from "next/link";
import React, { useState, useContext } from "react";
import { Button, Modal } from "antd";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import AuthForm from "../components/forms/AuthForm";
import { UserContext } from "../context";

const register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secret, setSecret] = useState("");
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [state] = useContext(UserContext);

  const handleSubmit = async (x) => {
    x.preventDefault();

    try {
      setLoading(true);
      console.log(name, email, password, secret);
      const { data } = await axios.post(`/register`, {
        name,
        email,
        password,
        secret,
      });
      if (data.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        setName("");
        setEmail("");
        setPassword("");
        setSecret("");
        setOk(data.ok);
        setLoading(false);
      }
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
    }
  };

  if (state && state.token) router.push("/");

  return (
    <div className="container-fluid">
      <div className="row py-5 bg-default-img text-light">
        <div className="col text-center">
          <h1>Register Page : </h1>
        </div>
      </div>

      <div className="row ">
        <div className="col-md-6 offset-md-3">
          <AuthForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            secret={secret}
            setSecret={setSecret}
            loading={loading}
          />
        </div>
      </div>

      <div className="row p-2">
        <div className="col">
          <Modal
            title="Congratulations !!"
            open={ok}
            onCancel={() => setOk(false)}
            footer={null}
          >
            <p>You have successfully registered.</p>
            <Link href="/login" className="btn btn-primary btn-sm">
              Login
            </Link>
          </Modal>
        </div>

        <div className="row">
          <div className="col">
            <p className="text-center">
              Already registered ? <Link href="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
