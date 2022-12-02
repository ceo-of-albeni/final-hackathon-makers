import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productsContexts } from "../../contexts/ProductContexts";

const UpdateProduct = () => {
  const {
    oneProduct,
    getOneProduct,
    updateProduct,
    getCategories,
    categories,
  } = useContext(productsContexts);

  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [desc, setDesc] = useState("");
  const [numberOfDays, setNumberOfDays] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [peopleCount, setPeopleCount] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [guide, setGuide] = useState("");
  const [images, setImages] = useState(null);
  useEffect(() => {
    getOneProduct(slug);
    getCategories();
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setPlace(oneProduct.setPlace);
      setDesc(oneProduct.desc);
      setNumber(oneProduct.numberOfdays);
      setCategory(oneProduct.category);
      setPrice(oneProduct.price);
      setDate(oneProduct.date);
      setPeopleCount(oneProduct.peopleCount);
      setCompanyName(oneProduct.companyName);
      setGuide(oneProduct.guide);
    }
  }, [oneProduct]);

  function saveChages() {
    let editedProduct = new FormData();
    editedProduct.append("title", title);
    editedProduct.append("place", place);
    editedProduct.append("desc", desc);
    editedProduct.append("number_of_days", numberOfDays);
    editedProduct.append("level", category);
    editedProduct.append("price", price);
    editedProduct.append("date", date);
    editedProduct.append("people_count", peopleCount);
    editedProduct.append("company_name", companyName);
    editedProduct.append("guide", guide);
    if (images) {
      editedProduct.append("tour_image_carousel", images);
    }
    updateProduct(slug, editedProduct, navigate);
  }

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
          <h4>Category before: {oneProduct?.category.title}</h4>
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option>Choose category...</option>
            {categories?.map(item => (
              <option key={item.id}>{item.title}</option>
            ))}
          </select>
          <br />
          {oneProduct ? (
            <img src={oneProduct.images} alt="" width="250" height="250" />
          ) : (
            <h4>No file</h4>
          )}
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
          <div className="container">
            <div className="center">
              <button className="btn" onClick={() => navigate("/products")}>
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
                <span style={{ fontSize: "22px" }}>Save Chages</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpdateProduct;
