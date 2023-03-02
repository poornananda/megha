import { Card, Col, Row, Typography } from "antd";
import React from "react";
import "./styles.scss";

const DashboardReports = () => {

    const clickHandler = (event) => {

    }
  const { Title } = Typography;
  return (
    <Row>
      <Col md={24} xs={24}>
        <Card className="hardwareEquipmentsCard">
          <Row>
            <Col md={24} xs={24}>
              <Title level={4} className="title" onClick= {clickHandler} style={{cursor: "pointer"}}>
                Reports
              </Title>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardReports;
