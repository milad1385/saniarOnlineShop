import React from "react";

function MobileOrder({ isShow, onShow, onOrder, status }) {
  return (
    <div
      className={`bg-white h-1/2 fixed md:hidden transition-all ${
        isShow ? "bottom-0" : "bottom-[-50%]"
      } z-50 left-0 right-0 rounded-t-lg`}
    >
      <div className="flex items-center justify-between bg-gray-100 py-4 px-4">
        <span className="font-DanaDemiBold text-lg">مرتب سازی بر اساس</span>
        <svg className="w-6 h-6 text-blue-600" onClick={() => onShow(false)}>
          <use href="#x-circule"></use>
        </svg>
      </div>
      <div className="px-4 divide-y-2 divide-gray-100 child:py-[13px]">
        <div
          className="flex items-center justify-between"
          onClick={() => {
            onOrder("default");
            onShow(false);
          }}
        >
          <span className={`${status === "default" ? "text-blue-600" : ""}`}>
            پیش فرض
          </span>
          {status === "default" && (
            <svg className="w-6 h-6 text-blue-600">
              <use href="#check-circule"></use>
            </svg>
          )}
        </div>
        <div
          className="flex items-center justify-between"
          onClick={() => {
            onOrder("score-desc");
            onShow(false);
          }}
        >
          <span className={`${status === "score-desc" ? "text-blue-600" : ""}`}>
            محبوب ترین
          </span>
          {status === "score-desc" && (
            <svg className="w-6 h-6 text-blue-600">
              <use href="#check-circule"></use>
            </svg>
          )}
        </div>
        <div
          className="flex items-center justify-between"
          onClick={() => {
            onOrder("createdAt-desc");
            onShow(false);
          }}
        >
          <span
            className={`${status === "createdAt-desc" ? "text-blue-600" : ""}`}
          >
            جدید ترین
          </span>
          {status === "createdAt-desc" && (
            <svg className="w-6 h-6 text-blue-600">
              <use href="#check-circule"></use>
            </svg>
          )}
        </div>
        <div
          className="flex items-center justify-between"
          onClick={() => {
            onOrder("createdAt-asc");
            onShow(false);
          }}
        >
          <span
            className={`${status === "createdAt-asc" ? "text-blue-600" : ""}`}
          >
            آخرین
          </span>
          {status === "createdAt-asc" && (
            <svg className="w-6 h-6 text-blue-600">
              <use href="#check-circule"></use>
            </svg>
          )}
        </div>
        <div
          className="flex items-center justify-between"
          onClick={() => {
            onOrder("price-asc");
            onShow(false);
          }}
        >
          <span className={`${status === "price-asc" ? "text-blue-600" : ""}`}>
            ارزان ترین
          </span>
          {status === "price-asc" && (
            <svg className="w-6 h-6 text-blue-600">
              <use href="#check-circule"></use>
            </svg>
          )}
        </div>
        <div
          className="flex items-center justify-between"
          onClick={() => {
            onOrder("price-desc");
            onShow(false);
          }}
        >
          <span className={`${status === "price-desc" ? "text-blue-600" : ""}`}>
            گران ترین
          </span>
          {status === "price-desc" && (
            <svg className="w-6 h-6 text-blue-600">
              <use href="#check-circule"></use>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileOrder;
