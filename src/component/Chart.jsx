import React from "react";

function Chart(props) {
  return (
    <div className="col">
      <div
        className="bar-chart-white"
        style={{
          height: `${100 - props.amount}%`,
        }}
      ></div>
      <div
        className="bar-chart"
        style={{
          height: `${props.amount}%`,
          backgroundColor: props.amount === props.highest ? "darkcyan" : null,
        }}
      ></div>
      <div className="graph">{props.day}</div>
    </div>
  );
}

export default Chart;
