import React from "react";
import { Routes, Route } from "react-router-dom";

// product
import HomePage from "./componentsAizat/HomePage/HomePage";
// import ProductList from "./componentsAizat/ProductList/ProductList";
// import AddProduct from "./componentsAizat/AddProduct/AddProduct";
// import UpdateProduct from "./componentsAizat/UpdateProduct/UpdateProduct";
// import AddCategory from "./componentsAizat/AddCategory/AddCategory";

//user
import Login from "./pages/Login";
import RegisterSuccess from "./pages/RegisterSuccess";
import Registration from "./pages/Registration";
import Details from "./components/Details/Details";

//guide
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
    // {
    //   link: "/products",
    //   element: <ProductList />,
    //   id: 2,
    // },
    // {
    //   link: "/add-product",
    //   element: <AddProduct />,
    //   id: 3,
    // },
    // {
    //   link: "/update-product",
    //   element: <UpdateProduct />,
    //   id: 4,
    // },
    // {
    //   link: "/add-category",
    //   element: <AddCategory />,
    //   id: 5,
    // },
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
    //!-------Guide-------
    {
      link: "/guides",
      element: <GuidesList />,
      id: 11,
    },
    {
      link: "/guides-details",
      element: <GuideDetails />,
      id: 12,
    },
    {
      link: "/add-guide",
      element: <AddGuide />,
      id: 13,
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
