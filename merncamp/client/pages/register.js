import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { toast } from "react-toastify";

import AuthForm from "../components/forms/AuthForm";

const register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secret, setSecret] = useState("");
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (x) => {
    x.preventDefault();

    try {
      setLoading(true);
      //console.log(name, email, password, secret);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/register`,
        {
          name,
          email,
          password,
          secret,
        }
      );
      setName("");
      setEmail("");
      setPassword("");
      setSecret("");
      setOk(data.ok);
      setLoading(false);
    } catch (err) {
      toast.error(err.response.data);
    }
    // const { data } = await axios
    //   .post("http://localhost:8000/api/register", {
    //     name,
    //     email,
    //     password,
    //     secret,
    //   })
    //   .then((res) => setOk(res.data.ok))
    //   .catch((err) => toast.error(err.response.data));
  };

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
