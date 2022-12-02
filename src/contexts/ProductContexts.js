import React, { useContext, useReducer } from "react";
import axios from "axios";

export const productsContexts = React.createContext();

const INIT_STATE = {
  products: [],
  pages: 0,
  categories: [],
  oneProduct: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.results,
        pages: Math.ceil(action.payload.count / 4),
      };
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "GET_ONE_PRODUCT":
      return {
        ...state,
        oneProduct: action.payload,
      };
    default:
      return state;
  }
}

const API = "44.206.228.104/api/";
const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getCategories() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const res = await axios.post(`${API}tour/`);
      dispatch({
        type: "GET_CATEGORIES",
        payload: res.data.results,
      });
    } catch (err) {
      console.log(err);
    }
  }
  async function createProduct(newProduct, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const res = await axios.post(`${API}`, newProduct);
    } catch (err) {
      console.log(err);
    }
  }

  async function getProducts() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const res = await axios(`${API} ${window.location.search}`);
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function createCategory(category) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const res = await axios.post(`${API}`);

      getCategories();
    } catch (err) {
      console.log(err);
    }
  }

  async function getOneProduct(slug) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const res = await axios(`${API}tour/${slug}`);
      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }
  async function updateProduct(id, editedProduct, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const res = await axios.put(`${API}tour/${id}`, editedProduct);
      navigate("/products");
      getProducts();
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteProduct(slug) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const res = await axios.delete(`${API}tour/${slug}/`);
      getProducts();
    } catch (err) {
      console.log(err);
    }
  }

  async function toggleLike(slug) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const res = await axios(`${API}tour/${slug}`);
      getProducts();
    } catch (err) {
      console.log(err);
    }
  }
  async function createComment(slug, content) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const res = await axios.post(`${API}`, content);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  async function deleteComment(productId, commentId) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const res = `${API}`;
      getOneProduct(productId);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <productsContexts.Provider
      value={{
        products: state.products,
        categories: state.categories,

        getCategories,
        createCategory,
        getProducts,
        createProduct,
        getOneProduct,
        updateProduct,
        deleteProduct,
        toggleLike,
        createComment,
        deleteComment,
      }}>
      {children}
    </productsContexts.Provider>
  );
};

export default ProductsContextProvider;
