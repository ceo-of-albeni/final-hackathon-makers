import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { UserOutlined } from "@ant-design/icons";
import { DatePicker, Space, Input } from "antd";
import "../../styles/addProduct.css";
// import for code
import { productsContexts } from "../../contexts/ProductContexts";

const AddProduct = () => {
  const navigate = useNavigate();

  const { createProduct } = useContext(productsContexts);

  const [title, setTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [place, setPlace] = useState("");
  const [desc, setDesc] = useState("");
  const [images, setImages] = useState(null);
  const [level, setLevel] = useState("");
  const [numberOfDays, setNumberOfDays] = useState("");

  const levels = ["Easy", "Meduim", "Hard"];

  function saveProduct() {
    let newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("company_name", companyName);
    newProduct.append("place", place);
    newProduct.append("desc", desc);
    newProduct.append("number_of_days", numberOfDays);
    newProduct.append("tour_image_carousel", images);
    newProduct.append("level", level);
    createProduct(newProduct, navigate);
  }

  return (
    <div>
      <section>
        <div className="form-container">
          <h2
            style={{
              color: "white",
              marginLeft: "25% ",
              fontSize: "29px",
              textTransform: "uppercase",
              marginTop: "7px",
            }}>
            Add Tour
          </h2>

          <Input
            style={{
              width: "60%",
              height: "30px",
              marginLeft: "20% ",
              fontSize: "18px",
            }}
            size="small"
            className="name-loc"
            type="text"
            placeholder="Name Location"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <br />

          <Input
            style={{
              width: "60%",
              height: "30px",
              marginLeft: "20% ",
              marginTop: "20px",
              fontSize: "18px",
            }}
            size="small"
            type="text"
            placeholder="Place"
            value={place}
            onChange={e => setPlace(e.target.value)}
          />
          <br />

          <Input
            style={{
              width: "60%",
              height: "30px",
              marginLeft: "20% ",
              marginTop: "20px",
              fontSize: "18px",
            }}
            size="small"
            type="text"
            className="desc"
            placeholder="Description"
            value={desc}
            onChange={e => setDesc(e.target.value)}
          />
          <br />

          <Input
            style={{
              width: "60%",
              height: "30px",
              marginLeft: "20% ",
              marginTop: "20px",
              fontSize: "18px",
            }}
            size="small"
            className="desc"
            type="text"
            placeholder="Number of days"
            value={numberOfDays}
            onChange={e => setNumberOfDays(e.target.value)}
          />
          <br />

          <Input
            style={{
              width: "60%",
              height: "30px",
              marginLeft: "20% ",
              marginTop: "20px",
              fontSize: "18px",
            }}
            size="small"
            type="text"
            placeholder="Company name"
            value={companyName}
            onChange={e => setCompanyName(e.target.value)}
          />
          <br />

          <input
            type="file"
            accept="image/*"
            onChange={e => setImages(e.target.files[0])}
          />
          <br />

          {/* <label htmlFor="img">
            <input
              type="file"
              id="img"
              multiple
              style={{
                width: "60%",
                height: "30px",
                marginLeft: "20% ",
                marginTop: "20px",
                fontSize: "18px",
              }}
              // value={images}
              onChange={e => setImages([...e.target.files])}
            />
          </label>
          <br /> */}

          <select
            value={level}
            onChange={e => setLevel(e.target.value)}
            style={{
              width: "60%",
              height: "30px",
              marginLeft: "20% ",
              marginTop: "20px",
              fontSize: "18px",
            }}>
            <option>Choose level...</option>
            {levels?.map(item => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <br />

          <div className="container">
            <div className="center">
              <button className="btn" onClick={saveProduct}>
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
                <span style={{ fontSize: "22px" }}>Сontinue</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddProduct;
