import axios from "axios";
import Link from "next/link";
import React, { useState, useContext, useEffect } from "react";
import { Button, Modal } from "antd";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import AuthForm from "../../../components/forms/AuthForm";
import { UserContext } from "../../../context//index.js";

const ProfileUpdate = () => {
  const [username, setUsername] = useState("");
  const [about, setAbout] = useState("");
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
      const { data } = await axios.put(`/profile-update`, {
        name,
        email,
        password,
        secret,
        username,
        about,
      });
      console.log("PROFILE UPDATE RESPONSE => ", data);
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

  // if (state && state.token) router.push("/");

  useEffect(() => {
    if (state && state.user) {
      setUsername(state.user.username);
      setAbout(state.user.about);
      setName(state.user.name);
      setEmail(state.user.email);
    }
  }, [state]);


  return (
    <div className="container-fluid">
      <div className="row py-5 bg-default-img text-light">
        <div className="col text-center">
          <h1>Profile : </h1>
        </div>
      </div>

      <div className="row ">
        <div className="col-md-6 offset-md-3">
          <AuthForm
            ProfileUpdate={true}
            username={username}
            setUsername={setUsername}
            about={about}
            setAbout={setAbout}
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

        
      </div>
    </div>
  );
};

export default ProfileUpdate;
