import React from "react";
import data from "../data.json";
import Chart from "./Chart";

function ContainerBtm() {
  const amount = data.map((entry) => {
    const { amount } = entry;
    return amount;
  });

  const highest = amount.reduce((acc, num) => {
    return acc > num ? acc : num;
  });

  return (
    <div className="container-btm">
      <div className="header">Spending - Last 7 days</div>
      <div className="chart row">
        {data.map((data, index) => {
          return (
            <Chart
              key={index}
              id={index}
              day={data.day}
              amount={data.amount}
              highest={highest}
            />
          );
        })}
      </div>
      <hr></hr>
      <div className="row">
        <div className="col">
          <p>Total this month</p>
          <p className="total">$478.33</p>
        </div>
        <div className="col right">
          <p className="percentage">
            <strong>+2.4%</strong>
          </p>
          <p>from last month</p>
        </div>
      </div>
    </div>
  );
}

export default ContainerBtm;
