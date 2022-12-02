import React from "react";
import { Routes, Route } from "react-router-dom";

// product
import HomePage from "./componentsAizat/HomePage/HomePage";
import ProductList from "./componentsAizat/ProductList/ProductList";
import DetailsForProduct from "./componentsAizat/DetailsForPoduct/DetailsForPorduct";
import AddProduct from "./componentsAizat/AddProduct/AddProduct";
import UpdateProduct from "./componentsAizat/UpdateProduct/UpdateProduct";
import AddCategory from "./componentsAizat/AddCategory/AddCategory";
import AddGuide from "./componentsAizat/AddGuide/AddGuide";

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
      link: "/datails-for-product",
      element: <DetailsForProduct />,
      id: 5,
    },
    {
      link: "/add=-category",
      element: <AddCategory />,
      id: 6,
    },
    {
      link: "/add-guide",
      element: <AddGuide />,
      id: 7,
    },
  ];
  return (
    <Routes>
      {LIST_ROUTES.map(item => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default Routing;
