import React from "react";
import { Link } from "react-router-dom";

function BestSellsBox({image , number}) {
  return (
    <div className="bg-white rounded-lg shadow-md flex items-center gap-x-3.5 p-2 hover:-translate-y-1.5 transition-all duration-200">
      <img src={`/images/product/${image}`} className="w-[95px]" />
      <div className="flex items-center gap-x-3">
        <span className="text-blue-600 font-DanaDemiBold text-2xl">{number}</span>
        <Link className="line-clamp-2 text-sm/[28px] font-DanaDemiBold">
          لپ تاپ 14.2 اینچی اپل مدل 2021 MacBook MKGR3 M1 Pro
        </Link>
      </div>
    </div>
  );
}

export default BestSellsBox;
