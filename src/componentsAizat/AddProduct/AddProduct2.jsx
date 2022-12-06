import React, { useState, useContext, useEffect } from "react";
import "../../styles/addProduct.css";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "antd";
import { DatePicker, Space } from "antd";
import { productsContexts } from "../../contexts/ProductContexts";

const AddProduct2 = () => {
  const navigate = useNavigate();

  const { createProduct2 } = useContext(productsContexts);

  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [peopleCount, setPeopleCount] = useState("");
  const [guide, setGuide] = useState("");

  function saveProduct() {
    let newProduct = new FormData();
    newProduct.append("price", price);
    newProduct.append("date", date);
    newProduct.append("people_count", peopleCount);
    newProduct.append("guide", guide);
    createProduct2(newProduct, navigate);
  }

  return (
    <div>
      <h2>Add Product</h2>
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
      <Button onClick={saveProduct}>Save</Button>
    </div>
  );
};

export default AddProduct2;
