import React, { useState } from "react";
import { Button, Layout, Menu, Modal, Badge } from "antd";
import { useNavigate } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Cart from "../Cart/Cart";

const Nav = () => {
  const [open, setOpen] = useState(false);
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
          onClick={() => navigate("/")}
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
    {
      label: (
        <Badge
          count={5}
          offset={[10, 10]}
          style={{ color: "blue", background: "white" }}
          size="small">
          <i
            className="fa-sharp fa-solid fa-cart-plus fa-xl"
            onClick={() => setOpen(true)}
            style={{
              marginTop: "20px",
              color: "white",

              // marginLeft: "1000px",
            }}></i>
        </Badge>
      ),
      key: "modal",
    },
    {
      label: (
        <i
          className="fa-regular fa-star fa-xl"
          style={{ color: "white" }}
          onClick={e => navigate("/favorite")}></i>
      ),
      key: "Favorite",
    },
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

          <Modal
            title="Cart for Tour"
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={1000}>
            <Cart />
          </Modal>

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
