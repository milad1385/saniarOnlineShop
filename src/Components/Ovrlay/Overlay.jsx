import React from "react";

function Overlay({ onShow, isShow }) {
  return (
    <div
      onClick={() => onShow(false)}
      className={`${
        isShow ? "" : "hide-menu"
      }  overlay fixed inset-0 bg-black/50 z-40 transition-all`}
    ></div>
  );
}

export default Overlay;
