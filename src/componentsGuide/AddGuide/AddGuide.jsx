import React, { useContext, useeffect, useState } from "react";
import { Input } from "antd";
import "../../styles/addGuide.css";
import { useNavigate } from "react-router-dom";
//custom
import { guidesContext } from "../../contexts/GuideContexts";

const AddGuide = () => {
  const navigate = useNavigate();

  const { createGuide } = useContext(guidesContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState(null);
  console.log(image);
  function saveGuide() {
    let newGuide = new FormData();
    newGuide.append("first_name", firstName);
    newGuide.append("last_name", lastName);
    newGuide.append("age", age);
    newGuide.append("image", image);
    createGuide(newGuide, navigate);
    console.log(newGuide.get("image"));
  }

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
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
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
            value={lastName}
            onChange={e => setLastName(e.target.value)}
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
            value={age}
            onChange={e => setAge(e.target.value)}
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
            onChange={e => setImage(e.target.files[0])}
          />
          <div className="container">
            <div className="center">
              <button className="btn" onClick={saveGuide}>
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
