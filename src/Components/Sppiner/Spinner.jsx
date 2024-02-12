import React from "react";
import "./spinner.css";
function Spinner({ isBtn }) {
  return (
    <div class={`lds-ellipsis ${isBtn ? "-mr-[57px]" : "mr-[22px]"}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Spinner;
