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
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      page: current,
    });
  }, [current]);

  function getPagesCount() {
    let pageCountGuide = [];
    for (let i = 1; i < pages + 1; i++) {
      pageCountGuide.push(i);
    }
    return pageCountGuide;
  }
  console.log(guides);

  // const onChange = page => {
  //   console.log(page);
  //   setCurrent(page);
  // };
  return (
    <div className="container-5">
      <h1 style={{ color: "black", marginLeft: "40%" }}>Guides List</h1>
      <div className="guides-list">
        {guides?.map(item => (
          <CardGuide className="card-guide" key={item.slug} item={item} />
        ))}
      </div>
      <ul></ul>
    </div>
  );
};

export default GuidesList;
