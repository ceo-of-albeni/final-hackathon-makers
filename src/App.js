import AntdFooter from "./components/AntdFooter.jsx/AntdFooter";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./Routing";
import AuthContextProvider from "./contexts/authContext";
import { BrowserRouter } from "react-router-dom";
import ProductsContextProvider from "./contexts/ProductContexts";

const App = () => {
  return (
    <ProductsContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routing />
          <AntdFooter />
        </BrowserRouter>
      </AuthContextProvider>
    </ProductsContextProvider>
  );
};

export default App;
