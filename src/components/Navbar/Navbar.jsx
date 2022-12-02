import React from "react";
import { Button, Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const { Header } = Layout;

  const items = [
    {
      label: (
        <img
          width="40"
          src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148616611.jpg?w=2000"
        />
      ),
      key: "logo",
    },
    {
      label: "Tours",
      key: "tour",
    },
    {
      label: (
        <a target="_blank" rel="noopener noreferrer">
          About Us
        </a>
      ),
      key: "about",
    },
    {
      label: (
        <a
          onClick={() => navigate("/home-page")}
          target="_blank"
          rel="noopener noreferrer">
          Home
        </a>
      ),
      key: "home",
    },
    // {
    //   label: (
    //     <Button type="primary" onClick={() => navigate("/login")}>
    //       Log In
    //     </Button>
    //   ),
    //   key: "button",
    // },
  ];

  const navigate = useNavigate();

  return (
    <div className="layout">
      <Header
        style={{
          backgroundColor: "cornflowerblue",
          zIndex: 1,
          position: "sticky",
          top: 0,
          width: "100%",
          // height: "65px",
          // display: "flex",
          // justifyContent: "space-between",
          // alignItems: "center",
        }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}>
          <Menu
            style={{
              backgroundColor: "cornflowerblue",
            }}
            breakpoint="xs"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items}
          />
          <Button
            style={{
              marginTop: "10px",
              marginRight: "20px",
            }}
            type="primary"
            onClick={() => navigate("/login")}>
            Log In
          </Button>
        </div>

        {/* <Button type="primary" onClick={() => navigate("/login")}>
          Log In
        </Button> */}
      </Header>
    </div>
  );
};

export default Nav;
