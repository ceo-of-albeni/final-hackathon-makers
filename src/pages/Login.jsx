import React, { useState, useContext, useEffect } from "react";
import { Button, Form, Input } from "antd";
import "../styles/register.css";
import Loader from "../components/Loader/Loader";
import { authContext } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { handleLogin, setError, loading } = useContext(authContext);

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function loginUser() {
    if (!username.trim() || !password.trim()) {
      alert("Some inputs are empty!");
      return;
    }
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    handleLogin(formData, username, navigate);
  }

  useEffect(() => {
    setError(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  const onFinish = values => {
    console.log("Success:", values);
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="form">
      <h1>Log In</h1>
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
          name="password"
          onChange={e => setPassword(e.target.value)}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}>
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <a
            className="login-form-forgot"
            style={{ marginLeft: "10px" }}
            href="#">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}>
          <Button onClick={loginUser} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <br />

        <p>
          Don't have an account yet? <a href="/register">Sign Up</a>
        </p>
      </Form>
    </div>
  );
};
export default Login;
