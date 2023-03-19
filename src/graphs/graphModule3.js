import ReactSpeedometer from "react-d3-speedometer";
import "./graphStyle.css";
import { useState } from "react";
import { Select } from "antd";
let sensorData = {
  value: 250,
  segments: 10,
  maxValue: 600,
  currentValueText: "Flight Duration",
};

export const GraphsModule3 = () => {
  const [select, setSelect] = useState("Flight Duration");

  const onSelectionChange = (val) => {
    setSelect(val);
    sensorData = data.find((obj) => obj.hasOwnProperty(val))[val];
  };

  const Sensors = [
    {
      value: "Flight Duration",
      label: "Flight Duration",
    },
    {
      value: "Tyre Pressure",
      label: "Tyre Pressure",
    },
    {
      value: "Tyre Rotor",
      label: "Tyre Rotor",
    },
    {
      value: "Due For Maintainance",
      label: "Due For Maintainance",
    },
    {
      value: "Performance Metrics - A14",
      label: "Performance Metrics - A14",
    },
    {
      value: "Cycles",
      label: "Cycles",
    },
  ];

  const data = [
    {
      "Tyre Rotor": {
        value: 1288,
        segments: 10,
        maxValue: 1549,
        currentValueText: "Tyre Rotor",
      },
    },
    {
      "Flight Duration": {
        value: 250,
        segments: 10,
        maxValue: 600,
        currentValueText: "Flight Duration",
      },
    },
    {
      "Tyre Pressure": {
        value: 150,
        segments: 10,
        maxValue: 222,
        currentValueText: "Tyre Pressure",
      },
    },
    {
      "Due For Maintainance": {
        value: 40,
        segments: 10,
        maxValue: 222,
        currentValueText: "Due For Maintainance",
      },
    },
    {
      "Performance Metrics - A14": {
        value: 0,
        segments: 10,
        maxValue: 222,
        currentValueText: "Performance Metrics - A14",
      },
    },
    {
      Cycles: {
        value: 200,
        segments: 10,
        maxValue: 222,
        currentValueText: "Cycles",
      },
    },
  ];

  return (
    <>
      <div className="mainWindow">
        <div className="container">
          <div style={{ margin: "10px" }}>
            <h2 className="header">Engine 3 Reports</h2>
          </div>
        </div>
        <div className="mainDiv">
          <div className="section1">
            <div style={{ margin: "10px" }}>
              <h3 className="header">Engine 3 Remaining Useful Life</h3>
            </div>
            <div className="speedometer-row1">
              <div className="speedometer-wrapper1">
                <ReactSpeedometer
                  maxValue={100}
                  value={100}
                  segments={10}
                  needleColor="black"
                  startColor="red"
                  endColor="green"
                  currentValueText="Remaining Useful Life"
                  height={300}
                  width={500}
                  textColor="black"
                  forceRender={true}
                />
              </div>
            </div>
          </div>
          <div className="section1">
            <div style={{ margin: "10px" }}>
              <h3 className="header">Sensors</h3>
            </div>
            <div className="speedometer-row1">
              <div className="speedometer-wrapper1">
                <ReactSpeedometer
                  maxValue={sensorData.maxValue}
                  value={sensorData.value}
                  segments={sensorData.segments}
                  needleColor="black"
                  startColor="green"
                  endColor="red"
                  currentValueText={`${sensorData.currentValueText}`}
                  height={300}
                  width={500}
                  textColor="black"
                  forceRender={true}
                />
              </div>
              <div className="dropDown">
              <Select
                size="large"
                onChange={onSelectionChange}
                options={Sensors}
                dropdownStyle={{ backgroundColor: "rgb(180, 225, 247)" }}
                style={{ width: "100%", cursor: "pointer"}}
                value={select}
                bordered= {true}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
