import React from "react";

function Shoper() {
  return (
    <tr className="flex items-center justify-between px-3 py-4 gap-x-3 md:gap-x-0">
      <td className="">
        <div className="flex items-center justify-between gap-x-2">
          <svg className="w-6 h-6">
            <use href="#shop"></use>
          </svg>
          <span className="font-DanaDemiBold text-sm">سانیار کالا</span>
          <span className="font-medium bg-green-200 text-green-700 text-xs md:text-sm px-2 py-1 rounded-2xl">
            منتخب
          </span>
        </div>
        <div className="flex items-center gap-x-2 text-xs mt-2.5">
          <span>89.6% رضایت از کالا</span>
          <span className="block bg-gray-200 w-px h-4"></span>
          <span>عملکرد عالی</span>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-x-2">
          <svg className="w-5 md:w-6 h-5 md:h-6">
            <use href="#box"></use>
          </svg>
          <p className="text-zinc-700"> ارسالی سانیار کالا </p>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-x-2">
          <svg className="w-5 md:w-6 h-5 md:h-6">
            <use href="#check"></use>
          </svg>
          <p className="text-zinc-700 text-sm">
            {" "}
            گارانتی اصالت و سلامت فیزیکی کالا
          </p>
        </div>
      </td>
      <td className="flex items-center gap-x-2">
        <p className="font-DanaDemiBold">389,500</p>
        <span className="tracking-tighter">تومان</span>
      </td>
      <td>
        <button class="bg-blue-600 flex items-center justify-center text-sm md:text-base gap-x-1 text-white shadow-blue p-2 rounded-md">
          <svg class="w-6 h-6">
            <use href="#shop-bag"></use>
          </svg>
          افزودن به سبد خرید
        </button>
      </td>
    </tr>
  );
}

export default Shoper;
