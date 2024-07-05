import axios from "axios";
import Link from "next/link"
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";

const register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secret, setSecret] = useState("");
  const [ok, setOk] = useState(false);
  const [loading,setLoading] =useState(false)

  const handleSubmit = async (x) => {
    x.preventDefault();
    

    try {
      setLoading(true)
      //console.log(name, email, password, secret);
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API}/register`, {
        name,
        email,
        password,
        secret, 
      }
    );
      setName("")
      setEmail("")
      setPassword("")
      setSecret("")
      setOk(data.ok);
      setLoading(false)
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
      <div className="row py-5 bg-secondary text-light">
        <div className="col text-center">
          <h1>Register Page : </h1>
        </div>
      </div>

      <div className="row ">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group p-2">
              <small>
                <label className="text-muted">Username :</label>
              </small>
              <input
                type="text"
                placeholder="Enter username"
                className="form-control"
                value={name}
                onChange={(x) => setName(x.target.value)}
              ></input>
            </div>

            <div className="form-group p-2">
              <small>
                <label className="text-muted">Email address :</label>
              </small>
              <input
                type="email"
                placeholder="Enter email"
                className="form-control"
                value={email}
                onChange={(x) => setEmail(x.target.value)}
              ></input>
            </div>

            <div className="form-group p-2">
              <small>
                <label className="text-muted">Password :</label>
              </small>
              <input
                type="password"
                placeholder="Enter password"
                className="form-control"
                value={password}
                onChange={(x) => setPassword(x.target.value)}
              ></input>
            </div>

            <div className="form-group p-2">
              <small>
                <label className="text-muted">Select your question:</label>
              </small>
              <select className="form-control">
                <option>which is your favourite animal ? </option>
                <option>which is your favourite city ? </option>
                <option>name your favourite colour ... </option>
              </select>
            </div>

            <div className="form-group p-2">
              <small>
                <label className="text-muted">Write answer: </label>
              </small>
              <input
                type="text"
                placeholder="Enter answer"
                className="form-control"
                value={secret}
                onChange={(x) => setSecret(x.target.value)}
              ></input>
            </div>

            <div className="form-group p-2">
              <button 
                disabled={!name || !email || !password || !secret}
                className="btn btn-primary col-12"
              >
                {loading ? <SyncOutlined spin className="py-1"/> : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className='row'>
      <div className="col">
        <Modal 
          title="Congratulations !!"
          visible={ok}
          onCancel={()=>setOk(false)}
          footer={null}          
        >
          <p>You have successfully registered.</p>
          <Link href="/login" className="btn btn-primary btn-sm">Login</Link>
          
        </Modal>
      </div>
      </div>
    </div>
  );
}; 
export default register;
