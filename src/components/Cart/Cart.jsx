import React from "react";
import { Space, Table, Tag } from "antd";
import { Button } from "antd";

const columns = [
  {
    title: "name of business company",
    dataIndex: "name",
    key: "name",
    render: text => <a>{text}</a>,
  },
  {
    title: "Day",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Location",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Date",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Price",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a> {record.name}</a>
        <Button type="primary">Delete</Button>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "700",
    age: 32,
    address: "Ала-Арча",
    tags: ["12"],
  },
  {
    key: "2",
    name: "1200",
    age: 42,
    address: "КЕЛЬ-СУУ",
    tags: ["12"],
  },
  {
    key: "3",
    name: "500",
    age: 32,
    address: "Манас-ордо",
    tags: ["12"],
  },
  {
    key: "3",
    name: "455",
    age: 32,
    address: "Нарын",
    tags: ["12"],
  },
];
const App = () => <Table columns={columns} dataSource={data} />;
export default App;
