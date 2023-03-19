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
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { userDetails } from "../components/dymmyData";

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { Title } = Typography;
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loader, setLoader] = useState(false);
    const [validation, setValidation] = useState(false);
    const [api, contextHolder] = notification.useNotification();
    const [msg, setMsg] = useState('');
    const openNotificationWithIcon = (type, title, message) => {
        api[type]({
            message: title || "Notification Title",
            description:
                message ||
                "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
        });
    };

    const isUserLoggedIn = localStorage.getItem("userLogin");
    if (isUserLoggedIn) {
        const userName = localStorage.getItem("userName");
        if (userName) dispatch(slice.actions.setUserName(userName));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = userDetails.find(val => val.usr === userName)
        if (!user) {
            setValidation(true);
            setMsg('Wrong Username or Password!');            
        } else {
            if (password === user.pwd) {
                setValidation(false);
                setLoader(true);
                localStorage.setItem("userLogin", true);
                localStorage.setItem("userName", userName);
                dispatch(slice.actions.setUserName(userName));
                setLoader(false);
                openNotificationWithIcon("success", "Login", "Successfully logged in");
                navigate("/home");
                setMsg('');
            }
            else{
                setMsg('Wrong Username or Password!');
            }
        }
    };

    return (
        <>
            {contextHolder}
            <Row className="loginPageMain">
                <Col md={24} xs={24}>
                    <Row>
                        <Col md={24} xs={24} className="TitleRow">
                            <Title className="title">AVIATION</Title>
                            <Title className="title">Predicting Equipment Maintenance</Title>
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
                                                setMsg('')
                                                setUsername(e?.target?.value);
                                                setValidation(false);
                                            }}
                                            allowClear
                                            size="large"
                                            className="input"
                                            status={!userName && validation ? "error" : ""}
                                            style={{
                                                borderColor: !userName && validation ? "E7612A" : "#1e64a5",
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
                                                setMsg('')
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
                                                borderColor: !password && validation ? "E7612A" : "#1e64a5",
                                                borderWidth: !password && validation ? "2px" : "",
                                            }}
                                            onPressEnter={handleSubmit}
                                            iconRender={(visible) =>
                                                visible ? (
                                                    <EyeTwoTone style={{ color: "#1e64a5" }} />
                                                ) : (
                                                    <EyeInvisibleOutlined style={{ color: "#1e64a5" }} />
                                                )
                                            }
                                        />
                                    </Col>
                                    <Col md={44} xs={24} style={{margin:'10px 0',}}>
                                       {msg? <div className="inputInvalid"> {msg}</div> : null}
                                    </Col>
                                    <Col md={24} xs={24} className="inputBox" style={{margin:'0'}}>
                                        <Button
                                            loading={loader}
                                            onClick={handleSubmit}
                                            className="loginButton"
                                        >
                                                
                                            Login
                                        </Button>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col md={8} xs={2} />
                    </Row>
                </Col>
            </Row>{
                isUserLoggedIn ? <Navigate to="/Home" /> : null
            }
        </>
    );
};

export default LoginPage;
