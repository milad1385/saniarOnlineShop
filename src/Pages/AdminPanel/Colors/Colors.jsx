import React from "react";
import AddNewColor from "./AddNewColor/AddNewColor";
import ColorsList from "./ColorsList/ColorsList";

function Colors() {
  return (
    <div className="container">
      <AddNewColor/>
      <ColorsList/>
    </div>
  );
}

export default Colors;
