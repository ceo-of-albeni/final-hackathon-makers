import React from "react";
import { productsContexts } from "../../contexts/ProductContexts";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Badge, Card, Space } from "antd";
const CardProduct = ({ item }) => {
  const navigate = useNavigate();
  const { updateProduct, deleteProduct } = useContext(productsContexts);
  console.log(item, "ITEM");
  return (
    <div>
      <Space direction="vertical" size="20px" style={{ width: "-100%" }}>
        {" "}
        <Card
          style={{
            width: 300,
            marginLeft: "20px",
            marginRight: "20px",
            marginTop: "30px",
          }}
          cover={
            <img
              alt="example"
              src={`http://3.92.183.40/${item.image}`}
              width="350px"
              height="270px"
            />
          }>
          <p style={{ marginLeft: "10%", fontSize: "17px" }}>
            {" "}
            <b>Название компании:</b>
            {item.company_name}
          </p>
          <p style={{ marginTop: "-5px", marginLeft: "10%", fontSize: "17px" }}>
            {" "}
            <b>Локация:</b> {item.title}
          </p>
          <p style={{ marginTop: "-5px", marginLeft: "10%", fontSize: "17px" }}>
            <b>Маршрут:</b> {item.place}
          </p>

          <p style={{ marginTop: "-5px", marginLeft: "10%", fontSize: "17px" }}>
            <b> Сложность:</b>
            {item.level}
          </p>
          <p style={{ marginTop: "-5px", marginLeft: "10%", fontSize: "17px" }}>
            <b>Длительность:</b>

            {item.number_of_days}
          </p>
          {/* <button onClick={() => deleteProduct(item.id)}>Delete</button> */}
        </Card>
      </Space>
    </div>
  );
};
export default CardProduct;
