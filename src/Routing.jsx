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
// guide
import AddGuide from "./componentsGuide/AddGuide/AddGuide";
import GuidesList from "./componentsGuide/GuidesList/GuidesList";
import GuideDetails from "./componentsGuide/GuideDetails/GuideDetails";

const Routing = () => {
  const LIST_ROUTES = [
    {
      link: "/",
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
      id: 7,
    },
    {
      link: "/login",
      element: <Login />,
      id: 8,
    },
    {
      link: "/register-success",
      element: <RegisterSuccess />,
      id: 9,
    },
    {
      link: "/details",
      element: <Details />,
      id: 10,
    },
    {
      link: "/profile",
      element: <ProfilePage />,
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
    {
      link: "/guides",
      element: <GuidesList />,
      id: 15,
    },
    {
      link: "/guides-details",
      element: <GuideDetails />,
      id: 16,
    },
    {
      link: "/add-guide",
      element: <AddGuide />,
      id: 17,
    },
    {
      link: "/register-business",
      element: <RegisterBusiness />,
      id: 18,
    },
  ];

  return (
    <Routes>
      {LIST_ROUTES.map(item => {
        return <Route path={item.link} element={item.element} key={item.id} />;
      })}
    </Routes>
  );
};

export default Routing;
