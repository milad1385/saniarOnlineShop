import React from "react";
import { Link } from "react-router-dom";

function BestSellsBox({ title, images, number, price }) {
  return (
    <div className="bg-white rounded-lg shadow-md flex items-center gap-x-3.5 p-2 hover:-translate-y-1.5 transition-all duration-200">
      <img
        src={`https://shoppingmilad.liara.run/uploads/covers/${images[0]}`}
        className="w-[95px]"
      />
      <div className="flex items-center gap-x-4">
        <span className="text-blue-600 font-DanaDemiBold text-2xl">
          {number}
        </span>
        <Link className="line-clamp-2 text-sm/[28px] font-DanaDemiBold">
          {title}
          <div>
            <span className="text-blue-600 font-DanaDemiBold">قیمت :</span> {price.toLocaleString("fa")} تومان
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BestSellsBox;
