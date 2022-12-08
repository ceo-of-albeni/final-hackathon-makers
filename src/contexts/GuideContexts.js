import React, { useReducer } from "react";
import axios from "axios";

export const guidesContext = React.createContext();

const INIT_STATE = {
  guides: [],
  pages: 0,
  oneGuide: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_GUIDES":
      return {
        ...state,
        guides: action.payload.results,
        pages: Math.ceil(action.payload.count / 5),
      };
    case "GET_ONE_GUIDE":
      return {
        ...state,
        oneGuide: action.payload,
      };
    default:
      return state;
  }
}

const API2 = "http://3.92.183.40/api/";
const GuideContextsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createGuide(newGuide, navigate) {
    for (const val of newGuide) {
      console.log(val);
    }
    // console.log(newGuide)
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API2}guide/`, newGuide, config);
      console.log(res);
      navigate("/guides");
    } catch (err) {
      console.log(err);
    }
  }

  async function getGuides() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API2}guide/${window.location.search}`, config);
      dispatch({
        type: "GET_GUIDES",
        payload: res.data,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getOneGuide(slug) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API2}guide/${slug}/`, config);
      dispatch({
        type: "GET_ONE_GUIDE",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function UpdateGuide(slug, editedGuide, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.put(`${API2}guide/${slug}`, editedGuide, config);
      navigate("/guides");
      getGuides();
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteGuide(slug) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.delete(`${API2}guide/${slug}/`, config);
      getGuides();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <guidesContext.Provider
      value={{
        guides: state.guides,
        pages: state.pages,
        oneGuide: state.oneGuide,
        deleteGuide,
        UpdateGuide,
        getOneGuide,
        createGuide,
        getGuides,
      }}>
      {children}
    </guidesContext.Provider>
  );
};

export default GuideContextsProvider;
