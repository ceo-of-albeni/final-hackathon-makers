import AntdFooter from "./components/AntdFooter.jsx/AntdFooter";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./Routing";
import AuthContextProvider from "./context/authContext";

const App = () => {
  return (
    <>
      <AuthContextProvider>
          <Navbar />
          <Routing />
          <AntdFooter />
      </AuthContextProvider>

    </>
  );
};

export default App;
