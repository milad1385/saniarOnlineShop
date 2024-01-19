import React from "react";

function ProductBoxInfo({productCount , setProductCount}) {
  return (
    <div className="bg-white rounded-md shadow h-[500px]  w-[450px] hidden lg:block sticky top-0 px-4 py-3">
      {/* start header of box */}
      <div className="flex items-center justify-between">
        <div>
          <img
            src="/images/product/laptop-4.jpg"
            alt="laptop 4"
            className="w-[90px] shrink-0"
          />
        </div>
        <p className="w-[204px] font-DanaDemiBold">
          ساعت هوشمند سامسونگ مدل Galaxy Watch3 SM-R840 45mm بند چرمی
        </p>
      </div>
      <div class="flex items-center flex-wrap gap-x-2 mt-4">
        <div class="flex items-center gap-x-2 bg-gray-200 px-2 py-1 rounded-full cursor-default md:cursor-pointer">
          <div class="w-5 h-5 rounded-full bg-black"></div>
          <span>مشکی</span>
        </div>
        <div class="flex items-center gap-x-2 bg-gray-200 px-2 py-1 rounded-full cursor-default md:cursor-pointer">
          <div class="w-5 h-5 rounded-full bg-blue-600"></div>
          <span>آبی</span>
        </div>
        <div class="flex items-center gap-x-2 bg-gray-200 px-2 py-1 rounded-full cursor-default md:cursor-pointer">
          <div class="w-5 h-5 rounded-full bg-red-500"></div>
          <span>قرمز</span>
        </div>
        <div class="flex items-center gap-x-2 bg-gray-200 px-2 py-1 rounded-full cursor-default md:cursor-pointer">
          <div class="w-5 h-5 rounded-full bg-yellow-400"></div>
          <span>زرد</span>
        </div>
      </div>
      <div className="flex items-center gap-x-2 my-4">
        <img
          src="/images/category/brand1-1.png"
          class="w-[100px]"
          alt="category"
        />
        <p>شیائومی</p>
      </div>
      <div class="flex items-center gap-x-2 text-sm my-4">
        <span class="text-zinc-700 text-sm ">16 دیدگاه</span>
        <span class="block w-[1.5px] h-5 bg-gray-200"></span>
        <div class="flex gap-x-1">
          <span class="text-sm  text-zinc-700">(17) 4.5</span>
          <svg class="w-5 h-5 text-yellow-400">
            <use href="#star"></use>
          </svg>
        </div>
      </div>
      <div class="flex  gap-x-2 my-6">
        <svg class="w-5 h-5 text-green-500">
          <use href="#check"></use>
        </svg>
        <p class="font-DanaMedium text-zinc-600">
          گارانتی اصالت و سلامت فیزیکی کالا
        </p>
      </div>
      <div class="flex items-center justify-between my-4">
        <span class="text-gray-400 font-DanaDemiBold text-lg line-through">
          1,500,000 تومان
        </span>
        <span class="block w-[1.5px] h-6 bg-gray-400"></span>
        <span class="text-blue-600 text-lg font-DanaDemiBold">
          1,200,000 تومان
        </span>
      </div>
      <div className="flex items-center justify-center my-6">
        <div class="flex items-center gap-x-2">
          <div
            class="w-10 h-[30px] select-none bg-blue-600 text-white flex-center rounded-r-full font-DanaMedium shadow-blue cursor-default md:cursor-pointer"
            onClick={() => setProductCount((prevCount) => prevCount + 1)}
          >
            <span class="mt-1 select-none">+</span>
          </div>
          <div class="bg-white w-[50px] h-[30px] flex-center font-DanaDemiBold rounded-md shadow">
            {productCount}
          </div>
          <div
            class="w-10 h-[30px] select-none bg-blue-600 text-white flex-center rounded-l-full font-DanaMedium shadow-blue cursor-default md:cursor-pointer"
            onClick={() => {
              if (productCount !== 1) {
                setProductCount((prevCount) => prevCount - 1);
              }
            }}
          >
            <span class="mt-1 select-none">-</span>
          </div>
        </div>
      </div>
      <button class="flex items-center justify-center w-full gap-x-1 bg-blue-600 text-white px-6 py-2 rounded-md shadow-blue">
        <svg class="w-6 h-6">
          <use href="#shop-bag"></use>
        </svg>
        خرید کالا
      </button>
    </div>
  );
}

export default ProductBoxInfo;
