import AntdFooter from "./components/AntdFooter.jsx/AntdFooter";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./Routing";
import AuthContextProvider from "./context/authContext";
import ProductsContextProvider from "./contexts/ProductContexts";

const App = () => {
  return (
    <>
      <ProductsContextProvider>
        <AuthContextProvider>
          <Navbar />
          <Routing />
          <AntdFooter />
        </AuthContextProvider>
      </ProductsContextProvider>
    </>
  );
};

export default App;
