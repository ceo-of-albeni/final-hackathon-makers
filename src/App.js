import AntdFooter from "./components/AntdFooter.jsx/AntdFooter";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./Routing";
import AuthContextProvider from "./context/authContext";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Navbar />
        <Routing />
        <AntdFooter />
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
