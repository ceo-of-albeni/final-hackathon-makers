import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
//user
import Login from "./pages/Login";
import RegisterSuccess from "./pages/RegisterSuccess";
import Registration from "./pages/Registration";
import Details from "./components/Details/Details";

const Routing = () => {
  const LIST_ROUTES = [
    {
      link: "/register",
      elemenet: <Registration />,
      id: 8,
    },
    {
      link: "/login",
      elemenet: <Login />,
      id: 9,
    },
    {
      link: "/register-success",
      elemenet: <RegisterSuccess />,
      id: 10,
    },
    {
      link: "/",
      elemenet: <HomePage />,
      id: 11,
    },
    {
      link: "/products/:id",
      elemenet: <Details />,
      id: 12,
    },
  ];
  return (
    <Routes>
      {LIST_ROUTES.map(item => (
        <Route path={item.link} element={item.elemenet} key={item.id} />
      ))}
      {/* <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/register-success" element={<RegisterSuccess />} />
      <Route path="/details" element={<Details />} />
      <Route path="/register-success" element={<RegisterSuccess />} /> */}
    </Routes>
  );
};

export default Routing;
