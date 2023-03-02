import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Popover, Row, Typography } from "antd";
import React from "react";
import DashboardHardware from "../components/DashboardHardware";
import DashboardReports from "../components/DashboardReports";
import "./index.scss";
import { useSelector } from "react-redux";

const HomePage = () => {
    const userName = useSelector((state) => state.loginDetails.userName);
  const { Title, Text } = Typography;

  const handleLogOut = () => {
    localStorage.removeItem("userLogin");
    window.location.reload();
  };

  const LogoutButtonCode = () => {
    return (
      <Row>
        <Col md={24} xs={24}>
          <Button className="logOutButton" onClick={handleLogOut}>
            Logout&nbsp;&nbsp;
            <LogoutOutlined />
          </Button>
        </Col>
      </Row>
    );
  };

  return (
    <Row className="homePageMain">
      <Col md={24} xs={24}>
        <Row>
          <Col md={24} xs={24} className="homePageHeader">
            <Popover
              className="popOverStyles"
              title={null}
              content={LogoutButtonCode}
              trigger="click">
              <Button className="homePageUserButton">
                <div>
                  <Text>{userName}</Text>
                  &nbsp;&nbsp;&nbsp;
                  <Avatar
                    style={{ backgroundColor: "#707E7D" }}
                    icon={<UserOutlined />}
                  />
                </div>
              </Button>
            </Popover>
          </Col>
          <Col md={24} xs={24} className="TitleRow">
            <Title className="title" level={2}>
              AVIATION
            </Title>
            <Title className="title" level={3}>
              Predicting Equipment Maintenance
            </Title>
          </Col>
          <Col md={4} xs={2}></Col>
          <Col md={16} xs={20}>
            <DashboardReports />
            <DashboardHardware />
          </Col>
          <Col md={4} xs={2}></Col>
        </Row>
      </Col>
    </Row>
  );
};

export default HomePage;
