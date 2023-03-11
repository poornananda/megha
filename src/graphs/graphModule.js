import ReactSpeedometer from "react-d3-speedometer";

export const GraphsModule = () => {
  return (
    <>
      {" "}
      <h2>Engine 1 Reports</h2>
      <h3>Engine 1 Remaining Useful Life</h3>
      <div>
        <ReactSpeedometer
          maxValue={600}
          value={400}
          segments={10}
          needleColor="blue"
          startColor="green"
          endColor="red"
          currentValueText="Flight Duration"
        />
        <ReactSpeedometer
          value={180}
          maxSegmentLabels={5}
          segments={1000}
          maxValue={222}
          currentValueText="Tyre Pressure"
          needleColor="blue"
          startColor="green"
          endColor="red"
        />
        <ReactSpeedometer
          value={1000}
          maxSegmentLabels={5}
          segments={1000}
          maxValue={1549}
          currentValueText="Tyre Rotor"
          needleColor="blue"
          startColor="green"
          endColor="red"
        />
        <ReactSpeedometer
          maxValue={0.3}
          value={0.2}
          segments={6}
          needleColor="blue"
          startColor="green"
          endColor="red"
          currentValueText="Due For Maintainance"
          
        />
        <ReactSpeedometer
          value={37}
          segments={10}
          maxValue={43.5}
          currentValueText="Performance Metrics - A14"
          needleColor="blue"
          startColor="green"
          endColor="red"
        />
        <ReactSpeedometer
          value={250}
          maxSegmentLabels={5}
          segments={1000}
          maxValue={500}
          currentValueText="Tyre"
          needleColor="blue"
          startColor="green"
          endColor="red"
        />
      </div>
    </>
  );
};
