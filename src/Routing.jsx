import React from "react";
import { Routes, Route } from "react-router-dom";
// product
import HomePage from "./componentsAizat/HomePage/HomePage";
import ProductList from "./componentsAizat/ProductList/ProductList";
import AddProduct from "./componentsAizat/AddProduct/AddProduct";
import UpdateProduct from "./componentsAizat/UpdateProduct/UpdateProduct";
import AddProduct2 from "./componentsAizat/AddProduct/AddProduct2";
import Details from "./components/Details/Details";
//user
import Login from "./pages/Login";
import RegisterSuccess from "./pages/RegisterSuccess";
import Registration from "./pages/Registration";
import ProfilePage from "./pages/ProfilePage";
import RegisterBusiness from "./pages/RegisterBusiness";
import RegisterUser from "./pages/RegisterUser";

const Routing = () => {
  const LIST_ROUTES = [
    {
      link: "/home-page",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/products",
      element: <ProductList />,
      id: 2,
    },
    {
      link: "/add-product",
      element: <AddProduct />,
      id: 3,
    },
    {
      link: "/update-product",
      element: <UpdateProduct />,
      id: 4,
    },
    {
      link: "/register",
      element: <Registration />,
      id: 8,
    },
    {
      link: "/login",
      element: <Login />,
      id: 9,
    },
    {
      link: "/register-success",
      element: <RegisterSuccess />,
      id: 10,
    },

    {
      link: "/details",
      element: <Details />,
      id: 11,
    },
    {
      link: "/profile",
      element: <ProfilePage />,
      id: 12,
    },
    {
      link: "/register-business",
      element: <RegisterBusiness />,
      id: 12,
    },
    {
      link: "/add-product2",
      element: <AddProduct2 />,
      id: 13,
    },
    {
      link: "/register-user",
      element: <RegisterUser />,
      id: 14,
    },
  ];

  return (
    <Routes>
      {LIST_ROUTES.map(item => {
        // console.log(item);
        return <Route path={item.link} element={item.element} key={item.id} />;
      })}
    </Routes>
  );
};

export default Routing;
