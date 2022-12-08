import React from "react";
import CardProduct from "../CardProduct/CardProduct";
import { productsContexts } from "../../contexts/ProductContexts";
import { useContext } from "react";
import { useEffect } from "react";
import "../../styles/productsList.css";

const ProductList = () => {
  const { getProducts, products } = useContext(productsContexts);
  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <h1 style={{ color: "blue", marginLeft: "40%", marginTop: "30px" }}>
        Tour List
      </h1>
      <div className="products-list">
        {products?.map(item => (
          <CardProduct key={item.slug} item={item} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
