import React from "react";
import { Card, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const blocks = [
    { title: "Home", path: "/home", color: "#bae637" },
    { title: "USA Data", path: "/data", color: "#ffd666" },
    { title: "Users", path: "/users", color: "#91d5ff" },
    { title: "Contact Us", path: "/contact", color: "#ff85c0" },
    { title: "About Us", path: "/about", color: "#ffc069" },
  ];

  return (
    <div style={{ padding: "24px" }}>
      <h1>Dashboard</h1>
      <Row gutter={[16, 16]}>
        {blocks.map((block, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <Card
              hoverable
              style={{
                backgroundColor: block.color,
                textAlign: "center",
                fontSize: "18px",
                fontWeight: "bold",
                height: 120,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "16px",
              }}
              onClick={() => navigate(block.path)}
            >
              {block.title}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Dashboard;
