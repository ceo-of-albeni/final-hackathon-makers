import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
import "../../styles/addProduct.css";
// import for code
import { productsContexts } from "../../contexts/ProductContexts";

const AddProduct = () => {
  const navigate = useNavigate();

  const { createProduct } = useContext(productsContexts);

  const [title, setTitle] = useState("");
  const [company_name, setCompanyName] = useState("");
  const [place, setPlace] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const [level, setLevel] = useState("");
  const [number_of_days, setNumberOfDays] = useState("");
  const [carousel, setCarousel] = useState(null);

  const levels = ["easy", "meduim", "hard"];

  function saveProduct() {
    console.clear();
    console.log(carousel);
    let newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("image", image);
    newProduct.append("company_name", company_name);
    newProduct.append("place", place);
    newProduct.append("desc", desc);
    newProduct.append("number_of_days", number_of_days);
    newProduct.append("tour_image_carousel", carousel);
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
            placeholder="Title"
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
            value={number_of_days}
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
            value={company_name}
            onChange={e => setCompanyName(e.target.value)}
          />
          <br />

          <input
            type="file"
            style={{
              width: "60%",
              height: "30px",
              marginLeft: "20% ",
              marginTop: "20px",
              fontSize: "18px",
            }}
            onChange={e => setImage(e.target.files[0])}
          />
          <br />

          <input
            type="file"
            style={{
              width: "60%",
              height: "30px",
              marginLeft: "20% ",
              marginTop: "20px",
              fontSize: "18px",
            }}
            onChange={e => setCarousel(e.target.files[0])}
          />
          <br />

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
