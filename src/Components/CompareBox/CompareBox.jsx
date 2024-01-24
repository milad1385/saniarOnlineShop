import React from "react";

function CompareBox({ onShowDetail, onShowDelete }) {
  return (
    <div className="bg-white shadow p-2.5 rounded-lg">
      {/* start header */}
      <div className="flex items-center justify-between">
        <div className="bg-red-200 text-red-500 text-sm p-2 rounded-lg font-DanaDemiBold">
          40 % تخفیف
        </div>
        <div className="flex items-center gap-x-1.5">
          <span className="bg-gray-200 block rounded-full p-1.5 text-zinc-700">
            <svg className="w-5 h-5">
              <use href="#compare"></use>
            </svg>
          </span>
          <span className="bg-gray-200 block rounded-full p-1.5 text-zinc-700">
            <svg className="w-5 h-5">
              <use href="#heart"></use>
            </svg>
          </span>
          <span className="bg-gray-200 block rounded-full p-1.5 text-zinc-700">
            <svg className="w-5 h-5">
              <use href="#eye"></use>
            </svg>
          </span>
        </div>
      </div>
      {/* start body */}
      <div className="mt-1.5">
        <img
          src={`/images/product/product-image1.jpg`}
          alt="product-image6.jpg"
          className="w-[180px] mx-auto"
        />
        <div className="flex  justify-between mt-2.5">
          <div className="">
            <h3 className="font-DanaDemiBold text-sm md:text-base">
              ساعت هوشمند شیایومی
            </h3>
            <h5 className="text-sm text-gray-400 font-DanaMedium mt-1">
              mibro 3200Xfam smartwatch
            </h5>
          </div>
          <div className="flex flex-row-reverse gap-x-2">
            <div className="flex  gap-x-0.5">
              <svg className="w-4 h-4 text-yellow-400">
                <use href="#fill-star"></use>
              </svg>
            </div>
            <span className="text-xs text-gray-500 font-DanaDemiBold mt-1">
              4.8
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center mt-5 gap-x-3">
          <svg
            className="w-8 h-8 text-red-600 bg-red-200 p-1 rounded-md cursor-pointer"
            onClick={() => onShowDelete(true)}
          >
            <use href="#trash"></use>
          </svg>
          <svg
            className="w-8 h-8 text-blue-600 bg-blue-200 p-1 rounded-md cursor-pointer"
            onClick={() => onShowDetail(true)}
          >
            <use href="#eye"></use>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CompareBox;
