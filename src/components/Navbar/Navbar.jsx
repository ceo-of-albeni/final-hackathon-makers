import React from "react";
import { Button, Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const { Header } = Layout;

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
        <a
          onClick={() => navigate("/products")}
          target="_blank"
          rel="noopener noreferrer">
          Туры
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
          Добавить
        </a>
      ),
      key: "about",
    },
    {
      label: (
        <a
          onClick={() => navigate("/add-guide")}
          target="_blank"
          rel="noopener noreferrer">
          Добавить гидов
        </a>
      ),
      key: "guide",
    },
    {
      label: (
        <a
          onClick={() => navigate("/profile")}
          target="_blank"
          rel="noopener noreferrer">
          Профиль
        </a>
      ),
      key: "profile",
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
            breakpoint="lg"
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
            Войти
          </Button>
        </div>
      </Header>
    </div>
  );
};

export default Nav;
