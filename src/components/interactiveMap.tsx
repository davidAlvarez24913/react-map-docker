import { useState } from "react";
import { ServiceMap } from "./map";
import Navbar from "./navbar";

export default function InteractiveMap() {
  return (
    <>
      <Navbar />
      <div>
        <div className="buttons" style={buttonsStyle}></div>

        <ServiceMap icon={"bus"} />
      </div>
    </>
  );
}
const buttonsStyle = {
  display: "flex",
  justifyContent: "center",
};
