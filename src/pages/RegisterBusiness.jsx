import React, { useState, useContext, useEffect } from "react";
import { Button, Form, Input, Select } from "antd";
import "../styles/register.css";
import { authContext } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const RegisterBusiness = () => {
  const { handleBusiness, setError, loading } = useContext(authContext);

  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [desc, setDesc] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  function createBusiness() {
    if (
      !title.trim() ||
      !desc.trim() ||
      !phone.trim() ||
      !address.trim() ||
      !email.trim()
    ) {
      alert("Some inputs are empty!");
      return;
    }
    let formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("phone", phone);
    formData.append("image", image);
    formData.append("address", address);
    formData.append("email", email);

    handleBusiness(formData, navigate);
  }

  useEffect(() => {
    setError(false);
  }, []);

  const onFinish = values => {
    console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="form">
      <h1>Business Account</h1>
      {/* {error ? <h2>{error}</h2> : null} */}
      <Form
        name="basic"
        wrapperCol={{
          span: 25,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item onChange={e => setTitle(e.target.value)} name="title">
          <Input placeholder="Title" />
        </Form.Item>

        <Form.Item onChange={e => setPhone(e.target.value)} name="phone">
          <Input
            // addonBefore={prefixSelector}

            style={{
              width: "100%",
            }}
            placeholder="Phone number"
          />
        </Form.Item>

        <Form.Item name="email" onChange={e => setEmail(e.target.value)}>
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item name="address" onChange={e => setAddress(e.target.value)}>
          <Input placeholder="Address" />
        </Form.Item>

        <Form.Item name="desc" onChange={e => setDesc(e.target.value)}>
          <Input placeholder="Description" />
        </Form.Item>

        <Form.Item>
          <Input
            name="image"
            type="file"
            accept="image/*"
            onChange={e => setImage(e.target.files[0])}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}>
          <Button onClick={createBusiness} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterBusiness;
