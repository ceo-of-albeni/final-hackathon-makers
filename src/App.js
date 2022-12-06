import AntdFooter from "./components/AntdFooter.jsx/AntdFooter";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./Routing";
import AuthContextProvider from "./context/authContext";
import GuideContextsProvider from "./contexts/GuideContexts";
import { BrowserRouter } from "react-router-dom";
// import ProductContextsProvider from "./contexts/ProductContexts";
const App = () => {
  return (
    <BrowserRouter>
      {/* <ProductContextsProvider> */}
      <GuideContextsProvider>
        <AuthContextProvider>
          <Navbar />
          <Routing />
          {/* <AntdFooter /> */}
        </AuthContextProvider>
      </GuideContextsProvider>
      {/* </ProductContextsProvider> */}
    </BrowserRouter>
  );
};

export default App;
