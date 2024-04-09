import React from "react";

function SliderIcon({ icon, className = {} }) {
  return (
    <div className="bg-gray-100 text-zinc-500 w-[30px] h-[30px] flex-center rounded-full">
      <svg className={`w-5 h-5`}>
        <use className={className} href={`#${icon}`}></use>
      </svg>
    </div>
  );
}

export default SliderIcon;
