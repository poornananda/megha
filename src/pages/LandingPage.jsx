import React from "react";
import "./index.scss";
import { Avatar, Row, Col, Typography, Card, Button } from "antd";
import { LoginOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { slice } from "../store/createStore";

const LandingPage = () => {
  const history = useNavigate();
  const { Title, Text } = Typography;
  const dispatch = useDispatch();

  const isUserLoggedIn = localStorage.getItem("userLogin");
  const logOutHandler = (event) => {
    event.preventDefault();
    localStorage.removeItem("userLogin");
    localStorage.removeItem("userName");
    dispatch(slice.actions.setUserName(""));
    history("/");
  };

  return (
    <Row className="landingPageMain">
      <Col md={24} xs={24}>
        <Row>
          <Col md={24} xs={24} className="loginButtonRow">
            {!isUserLoggedIn ? (
              <Button className="LoginButton" onClick={() => history("/login")}>
                Login <LoginOutlined />
              </Button>
            ) : (
              <>
                <Avatar
                  style={{
                    backgroundColor: "#707E7D",
                    marginLeft: "0",
                    marginRight: "5px",
                    paddingLeft: "0",
                    cursor: "pointer"
                  }}
                  icon={<UserOutlined />}
                  onClick={(e) => {
                    e.preventDefault();
                    history("/Home");
                  }}
                />
                <Button className="LogoutButton" onClick={logOutHandler}>
                  Logout <LogoutOutlined />
                </Button>
              </>
            )}
          </Col>
          <Col md={24} xs={24} className="TitleRow">
            <Title className="title">AVIATION</Title>
            <Title className="title">Predicting Equipment Maintenance</Title>
          </Col>
          <Col md={6} xs={2} />
          <Col md={12} xs={20}>
            <Card className="aboutUsCard">
              <Title level={3} className="aboutUsTitle">
                About Us:
              </Title>
              <Title level={5} className="aboutUsContent">
                Data is more valuable than gold. Here’s the thing. Data can do
                so many great things for business.
                <br />
                An approach to use Analytics for Aviation Industry to enhance
                and optimize Service solutions to result in higher Air safety
                with predictive hardware units’ maintenance.
                <br />
                  <br />
                This Tool allows Airlines to reduce expenses by making informed
                decisions about hardware replacement and market positioning
                through the smart use of data.
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
