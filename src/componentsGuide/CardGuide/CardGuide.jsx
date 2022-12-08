import React, { useContext } from "react";
import { guidesContext } from "../../contexts/GuideContexts";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";

const CardGuide = ({ item }) => {
  const navigate = useNavigate();

  const { deleteGuide } = useContext(guidesContext);
  console.clear();
  console.log(item, "ITEM");
  return (
    <>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={
          <img alt="error:(" src={item.image} width="220px" height="280px" />
        }>
        {/* <img alt="error:(" src={item.image} width="220px" height="220px" /> */}

        <p style={{ color: "blue", fontSize: "16px" }}>
          {" "}
          <b> Name:</b> {item.first_name}
        </p>
        <p style={{ color: "blue", fontSize: "16px" }}>
          <b>Last name:</b> {item.last_name}
        </p>
        <p style={{ color: "blue", fontSize: "16px" }}>
          {" "}
          <b>Age:</b> {item.age}
        </p>
        {/* <button>Like</button> */}
        {/* <button style={{ color: "red" }}>Delete</button>
        <button style={{ color: "red" }}>Edit</button> */}
        {item.is_author ? <></> : null}
      </Card>
    </>
  );
};

export default CardGuide;
