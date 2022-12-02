import React from "react";
import "../../styles/footer-buttons.css";
import { Layout } from "antd";
const { Footer } = Layout;

const AntdFooter = () => {
  return (
    <div>
      <Layout>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "lightgrey",
            position: "fixed",
            bottom: 0,
            width: "100%",
            padding: "10px",
          }}>
          <p>©2022 All rights reserved</p>

          <div className="icon icon-fill">
            <i className="fa-brands fa-instagram"></i>
          </div>
          <div className="icon icon-enter">
            <i className="fa-brands fa-youtube"></i>
          </div>
          {/* <div className="icon icon-expand">
            <i className="fa fa-bars"></i>
          </div> */}
          <div className="icon icon-collapse">
            <i className="fa-brands fa-facebook"></i>
          </div>
          <div className="icon icon-rotate">
            <i className="fa-brands fa-twitter"></i>
          </div>
        </Footer>
      </Layout>
    </div>
  );
};

export default AntdFooter;
