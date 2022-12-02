import React from "react";
import { Carousel } from "antd";
import { Rate } from "antd";

const Details = () => {
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
        // flexDirection: "column",
      }}>
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

      <div>
        <h1>Issyk-Kul</h1>
        <p
          style={{
            fontSize: "25px",
            fontWeight: "lighter",
          }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          eum, eveniet quidem incidunt et odit vero harum minima deserunt
          commodi ipsam necessitatibus delectus eius enim ex pariatur a.
          Accusantium possimus alias nostrum aspernatur placeat, itaque rem.
          Iste assumenda eos atque?
        </p>
        <Rate />
      </div>
    </div>
  );
};

export default Details;
