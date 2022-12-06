import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsContexts } from "../../contexts/ProductContexts";
import Loader from "../Loader/Loader";
import { Carousel, Rate } from "antd";

const Details = () => {
  const { getOneProduct, oneProduct } = useContext(productsContexts);
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const onChange = currentSlide => {
    console.log(currentSlide);
  };
  return (
    <div
      style={{
        display: "flex",
        margin: "4%",
        // flexDirections: "column",
      }}>
      <div>
        <Carousel
          style={{
            width: "500px",
            marginRight: "20px",
          }}
          afterChange={onChange}>
          <div>
            {/* <h3 style={contentStyle}> */}
            <img
              // style={{ marginRight: "2%" }}
              src="https://kalpak-travel.com/wp-content/uploads/2021/02/issyk-kul.jpg"
              width="500"
            />
            {/* </h3> */}
          </div>
          <div>
            {/* <h3 style={contentStyle}> */}
            <img
              // style={{ marginRight: "2%" }}
              src="https://kalpak-travel.com/wp-content/uploads/2021/02/issyk-kul.jpg"
              width="500"
            />
            {/* </h3> */}
          </div>
          <div>
            {/* <h3 style={contentStyle}> */}
            <img
              // style={{ marginRight: "2%" }}
              src="https://kalpak-travel.com/wp-content/uploads/2021/02/issyk-kul.jpg"
              width="500"
            />
            {/* </h3> */}
          </div>
          <div>
            {/* <h3 style={contentStyle}> */}
            <img
              // style={{ marginRight: "2%" }}
              src="https://kalpak-travel.com/wp-content/uploads/2021/02/issyk-kul.jpg"
              width="500"
            />
            {/* </h3> */}
          </div>
        </Carousel>
      </div>

      <div>
        <h1>Title</h1>
        <p
          style={{
            fontSize: "25px",
            fontWeight: "lighter",
          }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          doloremque deserunt minima possimus asperiores beatae corrupti
          laudantium? Debitis, fugit quas? Ex inventore illum ullam enim nobis
          pariatur ipsum corporis odio a dicta tempore expedita ab accusamus,
          facilis aperiam earum, officiis maiores, debitis numquam ipsa quo
          sequi. Porro libero et quaerat praesentium fuga vero atque pariatur,
          quas dolore minus voluptatem dolores expedita cupiditate sunt. Magnam
          deserunt numquam ratione, quod, sequi ab dignissimos ex eum facilis
          eius odio fugit provident praesentium modi!
        </p>
        <Rate />
        <br />
        <a href="">
          <i className="fa-solid fa-comments fa-2xl"></i>
        </a>
      </div>
    </div>
  );
};

export default Details;
