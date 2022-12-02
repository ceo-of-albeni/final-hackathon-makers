import React from "react";
import { Button, Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const { Header } = Layout;

  const items = [
    // {
    //   label: (
    //     <Button type="primary" onClick={() => navigate("/login")}>
    //       Log In
    //     </Button>
    //   ),
    //   key: "button",
    // },
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
          onClick={() => navigate("/")}
          target="_blank"
          rel="noopener noreferrer">
          Home
        </a>
      ),
      key: "home",
    },
    {
      label: (
        <Button type="primary" onClick={() => navigate("/login")}>
          Log In
        </Button>
      ),
      key: "button",
    },
  ];

  const navigate = useNavigate();

  return (
    <Layout className="layout">
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
        <div className="logo" />

        <Menu
          style={{
            backgroundColor: "cornflowerblue",
          }}
          breakpoint="xs"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
        />

        {/* <Button type="primary" onClick={() => navigate("/login")}>
          Log In
        </Button> */}
      </Header>
    </Layout>
  );
};

export default Nav;
