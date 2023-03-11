import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Popover, Row, Typography } from "antd";
import React from "react";
import DashboardHardware from "../components/DashboardHardware";
import DashboardReports from "../components/DashboardReports";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { slice } from "../store/createStore";
import { Navigate } from "react-router-dom";
import Dashboard from "../components/dashboard";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state=> state.loginDetails.userName);
  const isUserLoggedIn = localStorage.getItem("userLogin");
  if (isUserLoggedIn) {
    const userName = localStorage.getItem("userName");
    if (userName) dispatch(slice.actions.setUserName(userName));
  }


  const { Title, Text } = Typography;

  const handleLogOut = () => {
    localStorage.removeItem("userLogin");
    localStorage.removeItem("userName");
    dispatch(slice.actions.setUserName(""));
    navigate("/")
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
              trigger="click"
            >{isUserLoggedIn? 
              <Button className="homePageUserButton">
                <div>
                  <Text>{user}</Text>
                  &nbsp;&nbsp;&nbsp;
                  <Avatar
                    style={{ backgroundColor: "#707E7D" }}
                    icon={<UserOutlined />}
                  />
                </div>
              </Button>
              : <Navigate to="/" />}
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
            <Dashboard/>
            <DashboardHardware />
            <DashboardReports />
          </Col>
          <Col md={4} xs={2}></Col>
        </Row>
      </Col>
    </Row>
  );
};

export default HomePage;
