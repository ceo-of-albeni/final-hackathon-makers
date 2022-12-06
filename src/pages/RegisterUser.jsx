import React, { useState, useContext, useEffect } from "react";
import { Button, Form, Input, DatePicker, Space } from "antd";
import "../styles/register.css";
import { authContext } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

const dateFormat = "YYYY/MM/DD";
const weekFormat = "MM/DD";

const RegisterUser = () => {
  const { handleUser, setError, loading } = useContext(authContext);

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthday, setBirthday] = useState("");

  function createUser() {
    if (!name.trim() || !surname.trim() || !birthday.trim()) {
      alert("Some inputs are empty!");
      return;
    }
    let formData = new FormData();
    formData.append("name", name);
    formData.append("surname", surname);
    formData.append("birthday", birthday);

    handleUser(formData, navigate);
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
      <h1>Personal Account</h1>
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
        <Form.Item onChange={e => setName(e.target.value)} name="name">
          <Input placeholder="First name" />
        </Form.Item>

        <Form.Item onChange={e => setSurname(e.target.value)} name="surname">
          <Input placeholder="Second name" />
        </Form.Item>

        <Form.Item onChange={e => setBirthday(e.target.value)} name="birthday">
          <Input placeholder="Birthday" />
        </Form.Item>

        <Form.Item
          style={{ marginTop: "20px" }}
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

export default RegisterUser;
