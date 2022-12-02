import React from "react";

const CardForSwiper = ({ image, make }) => {
  return (
    <div>
      <img src={image} alt="" />
      <p style={{ fontSize: "20px" }}>{make}</p>
    </div>
  );
};

export default CardForSwiper;
