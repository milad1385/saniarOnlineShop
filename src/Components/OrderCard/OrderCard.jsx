import React from "react";

function OrderCard() {
  return (
    <div className="bg-white rounded-md shadow p-3 flex items-start justify-between">
      <div className="flex gap-x-8">
        <img
          src="/images/product/laptop-5.jpg"
          alt="product"
          className="w-[125px] h-[125px]"
        />
        <div>
          <div className="flex items-start gap-x-3 py-2">
            <p className="font-DanaDemiBold">
              لپ تاپ ایسوس تاف 15.6 اینچ مدل fax-c0254
            </p>
            <div className="bg-red-200 text-sm px-2 py-0.5 text-red-600 block rounded-md">
              <span className="mt-px block">17%</span>
            </div>
          </div>
          <div className="flex items-center gap-x-5 mt-2">
            <div className="text-sm font-DanaMedium text-gray-600 flex items-center gap-x-2">
              <svg className="w-6 h-6">
                <use href="#shop"></use>
              </svg>
              <span> فروشنده : </span>
              <span>میلاد شاپ</span>
              <span className="block bg-gray-400 sepreator h-4 mr-2"></span>
            </div>
            <div className="text-sm font-DanaMedium text-gray-600 flex items-center gap-x-2">
              <svg className="w-6 h-6">
                <use href="#color"></use>
              </svg>
              <span> رنگ : </span>
              <div className="flex items-center gap-x-2 bg-gray-200 px-2 py-1 rounded-full cursor-default md:cursor-pointer">
                <div
                  className="w-5 h-5 rounded-full flex-center"
                  style={{ backgroundColor: "red" }}
                ></div>
                <span>قرمز</span>
              </div>
              <span className="block bg-gray-400 sepreator h-4 mr-2"></span>
            </div>
            <div className="text-sm font-DanaMedium text-gray-600 flex items-center gap-x-2">
              <svg className="w-6 h-6">
                <use href="#square"></use>
              </svg>
              <span> تعداد : </span>
              <span>2 عدد</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-between flex-col">
        <button className="bg-red-200 rounded-md p-2">
          <svg className="w-5 h-5 text-red-600">
            <use href="#trash"></use>
          </svg>
        </button>
        <div className="mt-12">
          <div className="flex items-center gap-x-5">
            <div className="flex items-center gap-x-4">
              <span className="text-gray-400 font-DanaDemiBold line-through">
                1,500,000 تومان
              </span>
              <span className="block w-[1.5px] h-6 bg-gray-400"></span>
              <span className="text-blue-600 font-DanaDemiBold">
                1,200,000 تومان
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="w-10 h-[30px] bg-blue-600 text-white flex-center rounded-r-full font-DanaMedium shadow-blue cursor-default md:cursor-pointer">
                <span className="mt-1">+</span>
              </div>
              <div className="bg-white w-[50px] h-[30px] flex-center font-DanaDemiBold rounded-md shadow">
                1
              </div>
              <div className="w-10 h-[30px] bg-blue-600 text-white flex-center rounded-l-full font-DanaMedium shadow-blue cursor-default md:cursor-pointer">
                <span className="mt-1">-</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
