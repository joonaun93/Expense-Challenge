import React from "react";
import logo from "../images/logo.svg";

function ContainerTop() {
  return (
    <div className="container-top row">
      <div className="col">
        <p>My balance </p>
        <p className="balance">$921.48</p>
      </div>
      <div className="col img">
        <img src={logo} />
      </div>
    </div>
  );
}

export default ContainerTop;
