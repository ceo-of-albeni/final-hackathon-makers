import React, { useState, useContext, useEffect } from "react";
import { Button, Form, Input, Select } from "antd";
import "../styles/register.css";
import { authContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const Registration = () => {
  const { handleRegister, error, setError, loading } = useContext(authContext);
  const { Option } = Select;
  const code_methods = ["email", "phone"];

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPasswordConfirm] = useState("");
  const [code_method, setCodeMethod] = useState("");

  function createUser() {
    if (
      !email.trim() ||
      !phone.trim() ||
      !username.trim() ||
      !password.trim() ||
      !password_confirm.trim()
    ) {
      alert("Some inputs are empty!");
      return;
    }
    let formData = new FormData();
    formData.append("email", email);
    formData.append("username", username);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("password_confirm", password_confirm);
    formData.append("code_method", code_method);
    handleRegister(formData, navigate);
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
      <h1>Sign Up</h1>
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
        <Form.Item
          onChange={e => setEmail(e.target.value)}
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}>
          <Input placeholder="E-mail" />
        </Form.Item>

        <Form.Item
          onChange={e => setPhone(e.target.value)}
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your phone phone!",
            },
          ]}>
          <Input
            // addonBefore={prefixSelector}

            style={{
              width: "100%",
            }}
            placeholder="Phone number"
          />
        </Form.Item>

        {/* <Form.Item label="Select">
          <Select
            placeholder="Select province"
            value={code_method}
            onChange={e => setCodeMethod(e.target.value)}>
            <Option value="email">E-mail</Option>
            <Option value="phone">Phone</Option>
          </Select>
        </Form.Item> */}
        <select
          value={code_method}
          onChange={e => setCodeMethod(e.target.value)}>
          <option>Choose</option>
          {code_methods?.map(item => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <br />

        <Form.Item
          name="username"
          onChange={e => setUsername(e.target.value)}
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}>
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          onChange={e => setPassword(e.target.value)}
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}>
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={["password"]}
          onChange={e => setPasswordConfirm(e.target.value)}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}>
          <Input.Password placeholder="Password confirmation" />
        </Form.Item>

        {/* <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}>
          <Button onClick={createUser} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Registration;
