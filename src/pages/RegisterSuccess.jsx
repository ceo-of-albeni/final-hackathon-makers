import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const RegisterSuccess = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "11%",
        textAlign: "center",
      }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/2048px-Check_green_icon.svg.png"
        width="80"
        alt=""
      />
      <h1 style={{ color: "rgb(2, 2, 181)" }}>
        Registration completed successfully!
      </h1>
      <p style={{ color: "rgb(2, 100, 200)", marginTop: "0" }}>
        Please check your registered email for email verification.
      </p>
      <Button ghost onClick={() => navigate("/login")}>
        OK
      </Button>
    </div>
  );
};

export default RegisterSuccess;
