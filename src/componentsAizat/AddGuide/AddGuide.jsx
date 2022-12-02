import React from "react";
import { Input } from "antd";
import "../../styles/addGuide.css";
import { useNavigate } from "react-router-dom";

const AddGuide = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container-2">
        <div className="form-container-2  ">
          <h2
            style={{
              // color: "rgb(2, 2, 181)",
              color: "white",
              marginLeft: "19% ",
              fontSize: "29px",
              textTransform: "uppercase",
            }}>
            Create your Guide{" "}
          </h2>
          <Input
            style={{
              width: "60%",
              height: "30px",
              marginLeft: "20% ",
              fontSize: "18px",
              marginTop: "20px",
            }}
            size="small"
            className="name-loc"
            type="text"
            placeholder="First name"
          />
          <Input
            style={{
              width: "60%",
              height: "30px",
              marginLeft: "20% ",
              fontSize: "18px",
              marginTop: "20px",
            }}
            size="small"
            className="name-loc"
            type="text"
            placeholder="Last name"
          />

          <Input
            style={{
              width: "60%",
              height: "30px",
              marginLeft: "20% ",
              fontSize: "18px",
              marginTop: "20px",
            }}
            size="small"
            className="name-loc"
            type="text"
            placeholder="Age"
          />
          <Input
            style={{
              width: "60%",
              height: "30px",
              marginLeft: "20% ",
              marginTop: "20px",
              fontSize: "18px",
              marginTop: "20px",
            }}
            size="small"
            type="file"
            accept="image/*"
          />
          <div className="container">
            <div className="center">
              <button className="btn" onClick={() => navigate("/add-product")}>
                <svg
                  width="180px"
                  height="60px"
                  viewBox="0 0 180 60"
                  className="border">
                  <polyline
                    points="179,1 179,59 1,59 1,1 179,1"
                    className="bg-line"
                  />
                  <polyline
                    points="179,1 179,59 1,59 1,1 179,1"
                    className="hl-line"
                  />
                </svg>
                <span style={{ fontSize: "22px" }}>Save</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGuide;
