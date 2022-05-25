import React from "react";
import Attribution from "./Attribution";
import ContainerTop from "./ContainerTop";
import ContainerBtm from "./ContainerBtm";

function App() {
  return (
    <div className="container container-main">
      <ContainerTop />
      <ContainerBtm />
      <Attribution />
    </div>
  );
}

export default App;
