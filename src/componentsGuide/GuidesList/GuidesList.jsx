import React, { useEffect, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CardGuide from "../CardGuide/CardGuide";
import { guidesContext } from "../../contexts/GuideContexts";

import "../../styles/guidesList.css";

const GuidesList = () => {
  //pagination
  const { getGuides, guides, pages } = useContext(guidesContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [current, setCurrent] = useState(1);

  // useEffect(() => {
  //   getGuides();
  // }, []);
  useEffect(() => {
    getGuides();
  }, []);

  console.log(guides);

  return (
    <div className="container-5">
      <h1 style={{ color: "blue", marginLeft: "40%" }}>Guides List</h1>
      <div className="guides-list">
        {guides?.map(item => (
          <CardGuide className="card-guide" key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
};

export default GuidesList;
