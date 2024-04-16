import React from "react";

function Slide({ title, price, off, images }) {
  return (
    <div className="flex  justify-between gap-x-5 py-4 px-2.5 bg-white rounded-md shadow-sm">
      <div>
        <img
          src={`http://localhost:3001/uploads/covers/${images[0]}`}
          alt="image"
          className="w-[120px] shrink-0"
        />
      </div>
      <div>
        <h2 className="font-DanaDemiBold text-sm">{title}</h2>
        <p className="text-xs font-DanaDemiBold text-gray-400 mt-2.5">
          Apple MacBook MKGR3 M1 Pro 2021 14.2 inch laptop
        </p>
        <div className="flex flex-row md:flex-col items-end mt-6 gap-x-4 md:gap-y-4">
          <div className="flex gap-x-1">
            <p className="text-blue-600 font-DanaDemiBold text-sm">
              {(price - (price * off) / 100).toLocaleString("fa")}
            </p>
            <span className="text-sm font-DanaMedium">تومان</span>
          </div>
          {off > 0 && (
            <div className="flex gap-x-1">
              <p className="line-through text-gray-400 text-sm font-DanaDemiBold">
                {price.toLocaleString("fa")}
              </p>
              <span className="text-sm font-DanaMedium text-gray-400">
                تومان
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Slide;
