import { Button } from "antd";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../contexts/authContext";

const ProfilePage = () => {
  const { currentUser, handleLogout } = useContext(authContext);

  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "4%",
        height: "537px",
      }}>
      <div
        style={{
          display: "flex",
        }}>
        {/* <h2>Is this a business account?</h2> */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
          alt=""
          width="300"
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2 style={{ marginLeft: "20px", color: "blue", marginBottom: "0" }}>
            Username
          </h2>
          <h4 style={{ marginLeft: "20px", color: "blue" }}>Email</h4>
          <h4 style={{ marginLeft: "20px", color: "blue", marginTop: "0" }}>
            Number
          </h4>
        </div>
      </div>
      <Button
        onClick={() => navigate("/register-user")}
        style={{ width: "200px", color: "black", marginTop: "2%" }}
        ghost>
        Personal account
      </Button>
      <Button
        onClick={() => navigate("/register-business")}
        style={{ width: "200px", color: "black", marginTop: "2%" }}
        ghost>
        Business account
      </Button>
      <Button
        onClick={handleLogout}
        style={{ width: "200px", color: "black", marginTop: "2%" }}
        ghost>
        Log Out
      </Button>
    </div>
  );
};

export default ProfilePage;
