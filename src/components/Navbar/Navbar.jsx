import React from "react";
import { Button, Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const Nav = () => {
  const { Header } = Layout;
  const itemssss = [
    {
      label: <a href="https://www.antgroup.com">Tours</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">Guides</a>,
      key: "1",
    },
  ];

  const items = [
    {
      label: (
        <img
          onClick={() => navigate("/home-page")}
          width="40"
          style={{
            marginTop: "10px",
          }}
          src="https://www.pngkey.com/png/full/37-379897_logo-travel-logo-png-free.png"
        />
      ),
      key: "logo",
    },
    {
      label: (
        <Dropdown
          menu={{
            itemssss,
          }}
          trigger={["click"]}>
          <a onClick={e => e.preventDefault()}>
            <Space>
              Add
              <i className="fa-sharp fa-solid fa-caret-down"></i>
            </Space>
          </a>
        </Dropdown>
      ),
    },
    {
      label: (
        <a
          onClick={() => navigate("/products")}
          target="_blank"
          rel="noopener noreferrer">
          Tours
        </a>
      ),
      key: "home",
    },
    {
      label: (
        <a
          onClick={() => navigate("/add-product")}
          target="_blank"
          rel="noopener noreferrer">
          Add
        </a>
      ),
      key: "about",
    },
    {
      label: (
        <a
          onClick={() => navigate("/profile")}
          target="_blank"
          rel="noopener noreferrer">
          Profile
        </a>
      ),
      key: "profile",
    },
    // {
    //   label: (
    //     <a
    //       onClick={() => navigate("/home-page")}
    //       target="_blank"
    //       rel="noopener noreferrer">
    //       Home
    //     </a>
    //   ),
    //   key: "home",
    // },
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
