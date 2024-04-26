import React from "react";

function TicketStat({ color, icon, title, number }) {
  return (
    <div
      className={`flex items-center gap-x-2.5 md:gap-x-4 flex-grow md:flex-grow-0 md:w-60 ${
        color ? color : ""
      } p-2 rounded-2xl`}
    >
      <div className="flex-center w-14 h-14 md:w-[68px] md:h-[68px] bg-white/20 rounded-2xl">
        <svg className="w-8 h-8 md:w-9 md:h-9 text-white">
          <use href={`#${icon}`}></use>
        </svg>
      </div>
      <div className="flex flex-col gap-y-1.5 md:gap-y-2 text-white">
        <span className="text-xs">{title}</span>
        <span className="font-DanaDemiBold text-sm md:text-lg">
          {number?.toLocaleString("fa")} عدد
        </span>
      </div>
    </div>
  );
}

export default TicketStat;
