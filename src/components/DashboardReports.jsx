import { Card, Col, Row, Typography } from "antd";
import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DashboardReports = () => {
  const engineName = useSelector((state) => state.loginDetails.engineName);
  const nav = useNavigate();

  const clickHandler = (event) => {
    event.preventDefault();
    if (engineName === "Engine 1") {
      nav("/Graphs1");
    }
    else if (engineName === "Engine 2") {
      nav("/Graphs2");
    }
    else if (engineName === "Engine 3") {
      nav("/Graphs3");
    }
    else {
      nav("/home");
    }
  };
  const { Title } = Typography;
  return (
    <div style={{ padding: "0  0 10px 0" }}>
      <Row>
        <Col md={24} xs={24}>
          <Card className="hardwareEquipmentsCard">
            <Row>
              <Col md={24} xs={24}>
                <Title
                  level={4}
                  className="title"
                  onClick={clickHandler}
                  style={{ cursor: "pointer" }}
                >
                  Reports
                </Title>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardReports;
