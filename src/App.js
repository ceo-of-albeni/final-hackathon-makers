import AntdFooter from "./components/AntdFooter.jsx/AntdFooter";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import AuthContextProvider from "./context/authContext";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routing />
          <AntdFooter />
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
};

export default App;
