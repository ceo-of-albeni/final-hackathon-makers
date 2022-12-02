import React, { useState, useContext, useEffect } from "react";
import "../../styles/addProduct.css";
//! import "../../styles/add.scss";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { DatePicker, Space } from "antd";
//!import for code
import { productsContexts } from "../../contexts/ProductContexts";

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const AddProduct = () => {
  const navigate = useNavigate();

  // const { getCategories, categories, createProduct } =
  //   useContext(productsContexts);

  // const [title, setTitle] = useState("");
  // const [place, setPlace] = useState("");
  // const [desc, setDesc] = useState("");
  // const [numberOfDays, setNumber] = useState("");
  // const [category, setCategory] = useState("");
  // const [price, setPrice] = useState("");
  // const [date, setDate] = useState("");
  // const [peopleCount, setPeopleCount] = useState("");
  // const [companyName, setCompanyName] = useState("");
  // const [guide, setGuide] = useState("");
  // const [images, setImages] = useState(null);

  // useEffect(() => {
  //   getCategories();
  // }, []);

  // function saveProduct() {
  //   let newProduct = new FormData();
  //   newProduct.append("title", title);
  //   newProduct.append("place", place);
  //   newProduct.append("desc", desc);
  //   newProduct.append("number_of_days", numberOfDays);
  //   newProduct.append("level", category);
  //   newProduct.append("price", price);
  //   newProduct.append("date", date);
  //   newProduct.append("people_count", peopleCount);
  //   newProduct.append("company_name", companyName);
  //   newProduct.append("guide", guide);
  //   newProduct.append("tour_image_carousel", images);
  //   createProduct(newProduct, navigate);
  // }

  return (
    <div>
      <section>
        <div className="form-container">
          <h1
            style={{
              // color: "rgb(2, 2, 181)",
              color: "white",
              marginLeft: "25% ",
              fontSize: "29px",
              textTransform: "uppercase",
              marginTop: "7px",
            }}>
            Add Tour
          </h1>

          <div>
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
              className="desc"
              type="number"
              placeholder="Price"
              value={price}
              onChange={e => setPrice(e.target.value)}
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
              className="price"
              type="number"
              placeholder="People count"
              value={peopleCount}
              onChange={e => setPeopleCount(e.target.value)}
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
              className=""
              type="number"
              placeholder="Company name"
              value={companyName}
              onchange={e => setCompanyName(e.target.value)}
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
              placeholder="guide"
              value={guide}
              onChange={e => setGuide(e.target.value)}
            />
            <br />
            <Space direction="vertical">
              <DatePicker
                value={date}
                onChange={e => setDate(e.target.value)}
                style={{
                  width: "200%",
                  height: "30px",
                  marginLeft: "67% ",
                  marginTop: "20px",
                  fontSize: "20px",
                }}
              />
            </Space>
            <br />
            <label htmlFor="img">
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
                value={images}
                onChange={e => console.log([...e.target.files])}
              />
            </label>

            <select
              style={{
                width: "60%",
                height: "30px",
                marginLeft: "20% ",
                marginTop: "20px",
                fontSize: "18px",
              }}>
              <option>Choose category...</option>
            </select>
            <br />

            <div className="container">
              <div className="center">
                <button className="btn" onClick={() => navigate("/add-guide")}>
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
        </div>
      </section>
    </div>
  );
};

export default AddProduct;
