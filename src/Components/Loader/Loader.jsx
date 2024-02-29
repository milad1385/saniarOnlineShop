import React from "react";
import "./Loader.css";
function Loader() {
  return (
    <div className="bg-blue-600 flex items-center justify-center fixed inset-0 z-50">
      <div class="lds-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
