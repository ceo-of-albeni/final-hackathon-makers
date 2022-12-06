import AntdFooter from "./components/AntdFooter.jsx/AntdFooter";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./Routing";
import AuthContextProvider from "./contexts/authContext";
import { BrowserRouter } from "react-router-dom";
import ProductsContextProvider from "./contexts/ProductContexts";
import GuideContextsProvider from "./contexts/GuideContexts";

const App = () => {
  return (
    <ProductsContextProvider>
      <GuideContextsProvider>
        <AuthContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routing />
            <AntdFooter />
          </BrowserRouter>
        </AuthContextProvider>
      </GuideContextsProvider>
    </ProductsContextProvider>
  );
};

export default App;
