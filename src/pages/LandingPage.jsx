import React from "react";
import "./index.scss";
import { Row, Col, Typography, Card, Button } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const history = useNavigate();
  const { Title } = Typography;

  return (
    <Row className="landingPageMain">
      <Col md={24} xs={24}>
        <Row>
          <Col md={24} xs={24} className="loginButtonRow">
            <Button className="LoginButton" onClick={() => history("/login")}>
              Login <LoginOutlined />
            </Button>
          </Col>
          <Col md={24} xs={24} className="TitleRow">
            <Title className="title">
              AVIATION
            </Title>
            <Title className="title">
              Predicting Equipment Maintenance
            </Title>
          </Col>
          <Col md={6} xs={2} />
          <Col md={12} xs={20}>
            <Card className="aboutUsCard">
              <Title level={3} className="aboutUsTitle">
                About US
              </Title>
              <Title level={5} className="aboutUsContent">
                Data is more valuable than gold. Here’s the thing. Data can do so many
                great things for business.<br/>
                An approach to use Analytics for Aviation Industry to enhance and optimize Service 
                solutions to result in higher Air safety with predictive hardware units’ maintenance.<br/>

                This Tool allows Airlines to reduce expenses by making informed decisions about 
                hardware replacement and market positioning through the smart use of data.
              </Title>
            </Card>
          </Col>
          <Col md={6} xs={2} />
        </Row>
      </Col>
    </Row>
  );
};

export default LandingPage;
