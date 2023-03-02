import React, { useState } from "react";
import "./index.scss";
import { Row, Col, Typography, Card, Input, Button, notification } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { slice } from "../store/createStore";

const LoginPage = () => {
    const dispatch  = useDispatch();
  const { Title } = Typography;
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [validation, setValidation] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type, title, message) => {
    api[type]({
      message: title || "Notification Title",
      description:
        message ||
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    });
  };

  const handleSubmit = () => {
    if (!userName || !password) {
      setValidation(true);
    } else {
      setValidation(false);
      setLoader(true);
      setTimeout(() => {
        localStorage.setItem("userLogin", true);
        dispatch(slice.actions.saveUserName(userName));
        setLoader(false);
        openNotificationWithIcon("success", "Login", "Successfully logged in");
        window.location = "/";
      }, 500);
    }
  };

  return (
    <>
      {contextHolder}
      <Row className="loginPageMain">
        <Col md={24} xs={24}>
          <Row>
            <Col md={24} xs={24} className="TitleRow">
              <Title className="title">
                AVIATION
              </Title>
              <Title className="title">
                Predicting Equipment Maintenance
              </Title>
            </Col>
            <Col md={8} xs={2} />
            <Col md={8} xs={20}>
              <Card className="loginCard">
                <Row>
                  <Col md={24} xs={24}>
                    <Title level={3} className="loginTitle">
                      Login
                    </Title>
                  </Col>
                  <Col md={24} xs={24} className="inputBox">
                    <Input
                      value={userName}
                      onChange={(e) => {
                        setUsername(e?.target?.value);
                        setValidation(false);
                      }}
                      allowClear
                      size="large"
                      className="input"
                      status={!userName && validation ? "error" : ""}
                      style={{
                        borderColor: !userName && validation ? "" : "#E7612A",
                        borderWidth: !userName && validation ? "2px" : "",
                      }}
                      placeholder="User Name"
                      prefix={<UserOutlined />}
                    />
                  </Col>
                  <Col md={24} xs={24} className="inputBox">
                    <Input.Password
                      value={password}
                      className="input"
                      onChange={(e) => {
                        setPassword(e?.target?.value);
                        setValidation(false);
                      }}
                      allowClear
                      size="large"
                      type="password"
                      placeholder="Password"
                      prefix={<LockOutlined />}
                      status={!password && validation ? "error" : ""}
                      style={{
                        borderColor: !password && validation ? "" : "#E7612A",
                        borderWidth: !password && validation ? "2px" : "",
                      }}
                      onPressEnter={handleSubmit}
                      iconRender={(visible) =>
                        visible ? (
                          <EyeTwoTone style={{ color: "#E7612A" }} />
                        ) : (
                          <EyeInvisibleOutlined style={{ color: "#E7612A" }} />
                        )
                      }
                    />
                  </Col>
                  <Col md={24} xs={24} className="inputBox">
                    <Button
                      loading={loader}
                      onClick={handleSubmit}
                      className="loginButton">
                      Login
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col md={8} xs={2} />
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default LoginPage;
