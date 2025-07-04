import axios from "axios";
import Link from "next/link";
import React, { useState, useContext, useEffect } from "react";
import { Button, Modal, Avatar } from "antd";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import AuthForm from "../../../components/forms/AuthForm";
import { UserContext } from "../../../context/index.js";
import {LoadingOutlined, CameraOutlined,CameraFilled } from "@ant-design/icons";

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
  const [state, setState] = useContext(UserContext);
  //profile image :
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);


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
        image,
      });
      console.log("PROFILE UPDATE RESPONSE => ", data);
      toast.success("Profile updated successfully");
      if (data.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        setName("");
        setEmail("");
        setPassword("");
        setSecret("");
        setOk(true);
        setLoading(false);
        //update user in local storage,update user, keep token
        let auth = JSON.parse(localStorage.getItem("auth"));
        auth.user = data;
        localStorage.setItem("auth", JSON.stringify(auth));
        //update user in context
        //using sparse operator to update user in context
        setState({...state, user: data });
      }
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
    }
  };

  if (!state && !state.token) router.push("/");

  useEffect(() => {
    if (state && state.user) {
      setUsername(state.user.username);
      setAbout(state.user.about);
      setName(state.user.name);
      setEmail(state.user.email);
      setImage(state.user.image || "");
    }
  }, [state]);


   const handleImage = async (e) => {
      const file = e.target.files[0]; // console.log("Selected image:", file); // Log the selected image file
      if (!file) {
        console.error("No file selected");
        return;
      }
      let formData = new FormData();
      formData.append("image", file);
      // formData.append("content", content);
      // console.log("Form data:", [...formData]); // Log the form data
  
      setUploading(true);
      try {
        const { data } = await axios.post("/upload-image", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        // console.log("url : ", data);
        setImage({
          url: data.url,
          public_id: data.public_id,
        });
      } catch (err) {
        setUploading(false);
        console.error(
          "Error uploading image:",
          err.response ? err.response.data : err.message
        );
        toast.error("Failed to upload image");
        //COMMENT
      }
    };

  return (
    <div className="container-fluid">
      <div className="row py-5 bg-default-img text-light">
        <div className="col text-center">
          <h1>Profile : </h1>
        </div>
      </div>

      <label className="d-flex justify-content-center h5 mt-3">
        {image && image.url ? (
          <Avatar size={30} src={image.url} />
        ) : loading ? (
          <LoadingOutlined className="mt-2" />
        ) : (
          <CameraFilled className="mt-2" />
        )}
        <input
          onChange={handleImage}
          type="file"
          accept="images/*"
          hidden
        ></input>
      </label>

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
            <p>You have successfully Updated you Profile.</p>
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
