import { Card, Col, Row, Typography } from "antd";
import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

const DashboardReports = () => {
  const nav = useNavigate();

  const clickHandler = (event) => {
    event.preventDefault();
    nav("/Graphs");
  };
  const { Title } = Typography;
  return (
    <div style={{padding:'0  0 10px 0'}}>
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
