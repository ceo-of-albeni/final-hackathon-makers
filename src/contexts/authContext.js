import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();

const API = "http://35.78.172.218/api";

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // const navigate = useNavigate();

  async function handleRegister(formData, navigate) {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/account/register/`, formData);
      console.log(res);
      navigate("/register-success");
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(formData, username, navigate) {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/account/login/`, formData);
      console.log(res);
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("username", username);
      setCurrentUser(username);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  async function checkAuth() {
    console.log("Check Auth Worked!");
    setLoading(true);
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(
        `${API}/account/token/refresh/`,
        { refresh: tokens.refresh },
        config
      );
      localStorage.setItem(
        "tokens",
        JSON.stringify({
          access: res.data.access,
          refresh: tokens.refresh,
        })
      );
      const username = localStorage.getItem("username");
      setCurrentUser(username);
      console.log(res);
    } catch (err) {
      console.log(err);
      handleLogout();
    } finally {
      setLoading(false);
    }
  }

  async function handleBusiness(formData, navigate) {
    setLoading(true);
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/business/`, formData, config);
      console.log(res);
      navigate("/profile");
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleUser(newProduct, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/user-profile/`, newProduct, config);
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  }

  function handleLogout() {
    localStorage.removeItem("tokens");
    localStorage.removeItem("username");
    setCurrentUser(false);
  }

  return (
    <authContext.Provider
      value={{
        currentUser,
        error,
        loading,
        handleRegister,
        setError,
        handleLogin,
        handleBusiness,
        checkAuth,
        handleLogout,
        handleUser,
      }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
