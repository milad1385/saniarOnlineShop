import React from "react";

function Headerbox({img}) {
  return (
    <div>
      <div className="flex items-center justify-between border-b-2 border-b-gray-300  p-3.5 pb-2">
        <div className="bg-red-200 text-red-600 text-xs md:text-sm p-2 rounded-lg">
          40 % تخفیف
        </div>
        <div className="flex items-center gap-x-2.5">
          <div className="flex items-center flex-col">
            <div className="bg-red-500 text-white rounded-md w-8 h-8 flex items-center justify-center text-sm font-DanaDemiBold">
              53
            </div>
            <span className="text-xs font-DanaDemiBold mt-2">ثانیه</span>
          </div>
          <div className="flex items-center flex-col">
            <div className="bg-gray-200 text-black rounded-md w-8 h-8 flex items-center justify-center text-sm font-DanaDemiBold">
              45
            </div>
            <span className="text-xs font-DanaDemiBold mt-2">دقیقه</span>
          </div>
          <div className="flex items-center flex-col">
            <div className="bg-gray-200 text-black rounded-md w-8 h-8 flex items-center justify-center text-sm font-DanaDemiBold">
              12
            </div>
            <span className="text-xs font-DanaDemiBold mt-2">ساعت</span>
          </div>
          <div className="flex items-center flex-col">
            <div className="bg-gray-200 text-black rounded-md w-8 h-8 flex items-center justify-center text-sm font-DanaDemiBold">
              1
            </div>
            <span className="text-xs font-DanaDemiBold mt-2">روز</span>
          </div>
        </div>
      </div>
      <div className="p-3.5">
        <img
          src={img}
          alt=""
          className="w-[200px]  mx-auto"
        />
        <div className="flex items-center justify-between">
          <div className="">
            <h3 className="font-DanaDemiBold text-sm md:text-base ">ساعت هوشمند شیایومی</h3>
            <h5 className="text-xs md:text-sm text-gray-400 font-DanaMedium mt-1">
              mibro 3200Xfam smartwatch
            </h5>
          </div>
          <div className="flex flex-row-reverse gap-x-2">
            <div className="flex items-center gap-x-1">
              <svg className="w-4 h-4 md:w-6 md:h-6 text-yellow-400">
                <use href="#star"></use>
              </svg>
              <svg className="w-4 h-4 md:w-6 md:h-6 text-yellow-400">
                <use href="#star"></use>
              </svg>
              <svg className="w-4 h-4 md:w-6 md:h-6 text-yellow-400">
                <use href="#star"></use>
              </svg>
              <svg className="w-4 h-4 md:w-6 md:h-6 text-yellow-400">
                <use href="#star"></use>
              </svg>
              <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-400">
                <use href="#star"></use>
              </svg>
            </div>
            <span className="hidden md:block text-sm text-gray-400 mt-1">(15+) 4.8</span>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between bg-gray-100 p-2 rounded-lg">
          <div className="flex flex-col font-DanaDemiBold text-sm">
            <span>
              3,750,000 <span className="tracking-tighter">تومان</span>
            </span>
            <span className="mt-2.5 line-through text-gray-400">
              6,750,000 <span className="tracking-tighter">تومان</span>
            </span>
          </div>
          <button className="bg-blue-600 flex items-center justify-center gap-x-1 text-white shadow-blue p-2 rounded-md text-sm md:text-base">
            <svg className="w-6 h-6">
              <use href="#shop-bag"></use>
            </svg>
            خرید محصول
          </button>
        </div>
      </div>
    </div>
  );
}

export default Headerbox;
