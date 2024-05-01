import React from "react";

function Slide({ title, price, off, images, main, onChange, info, longDesc }) {
  return (
    <div
      className={`flex  justify-between ${
        main?.title === title ? "border-l-4 border-l-blue-600" : ""
      } gap-x-5 py-4 px-2.5 bg-white rounded-md shadow-sm`}
      onClick={() => onChange(info)}
    >
      <div>
        <img
          src={`https://shoppingmilad.liara.run/uploads/covers/${images[0]}`}
          alt="image"
          className="w-[120px] shrink-0"
        />
      </div>
      <div>
        <h2 className="font-DanaDemiBold text-sm">{title}</h2>
        <p className="text-xs leading-6 line-clamp-1 w-[260px] font-DanaDemiBold text-gray-400 mt-2.5">
          {longDesc}
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
