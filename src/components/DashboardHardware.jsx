import { Card, Col, Row, Select, Typography } from "antd";
import React, { useEffect, useState } from "react";
import BarChart from "./BarChart";
import { EngineList, SensorList } from "./dymmyData";
import "./styles.scss";

const DashboardHardware = () => {
  const { Title } = Typography;

  const [engineList, setEngineList] = useState([]);
  const [sensorList, setSensorList] = useState([]);
  const [selectedEngine, setSelectedEngine] = useState("");
  const [selectedSensor, setSelectedSensor] = useState("");

  useEffect(() => {
    setEngineList(EngineList);
    setSensorList(SensorList);
  }, []);

  console.log(selectedSensor, selectedEngine);

  return (
    <Row>
      <Col md={24} xs={24}>
        <Card className="hardwareEquipmentsCard">
          <Row>
            <Col md={24} xs={24}>
              <Title level={4} className="title" style={{cursor: "default"}}>
                Hardware Equipments
              </Title>
            </Col>
            <Col md={24} xs={24}>
              <Row>
                <Col md={8} xs={24}>
                  <Row>
                    <Col md={24} xs={24} style={{ marginTop: "1rem"}} >
                      <Select
                        size="large"
                        // value={selectedEngine}
                        onChange={setSelectedEngine}
                        options={engineList}
                        style={{ width: "100%", cursor:"pointer" }}
                        placeholder="Search to Select engine"
                        showSearch
                        filterOption={(input, option) =>
                          (option?.label ?? "").includes(input)
                        }
                        filterSort={(optionA, optionB) =>
                          (optionA?.label ?? "")
                            .toLowerCase()
                            .localeCompare((optionB?.label ?? "").toLowerCase())
                        }
                      />
                    </Col>
                    <Col md={24} xs={24} style={{ marginTop: "1rem" }}>
                      <Select
                        size="large"
                        // value={selectedSensor}
                        onChange={setSelectedSensor}
                        options={sensorList}
                        style={{ width: "100%", cursor:"pointer"  }}
                        placeholder="Search to Select sensor"
                        showSearch
                        filterOption={(input, option) =>
                          (option?.label ?? "").includes(input)
                        }
                        filterSort={(optionA, optionB) =>
                          (optionA?.label ?? "")
                            .toLowerCase()
                            .localeCompare((optionB?.label ?? "").toLowerCase())
                        }
                      />
                    </Col>
                  </Row>
                </Col>
                <Col md={2} xs={0} />
                <Col md={10} xs={24}>
                  <BarChart />
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardHardware;
