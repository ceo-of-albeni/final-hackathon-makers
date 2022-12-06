import React, { useContext } from "react";
import { guidesContext } from "../../contexts/GuideContexts";
import { useNavigate } from "react-router-dom";

import { Rate } from "antd";
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

        <p> Name:{item.first_name}</p>
        <p>Last name:{item.last_name}</p>
        <p>Age:{item.age}</p>
        <button>Like</button>
        {item.is_owner ? (
          <>
            <button style={{ color: "red" }}>Delete</button>
            <button style={{ color: "red" }}>Edit</button>
          </>
        ) : null}
      </Card>
    </>
  );
};

export default CardGuide;
