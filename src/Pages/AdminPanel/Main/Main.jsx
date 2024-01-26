import React from "react";

function Main() {
  return (
    <>
      <div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-4 md:gap-x-8 mt-10 mx-auto place-items-center ">
          <div class="flex items-center gap-x-2.5 md:gap-x-4 flex-grow md:flex-grow-0 md:w-60 bg-amber-400  p-2 rounded-2xl">
            <div class="flex-center w-14 h-14 md:w-[68px] md:h-[68px] bg-white/20 rounded-2xl">
              <svg class="w-8 h-8 md:w-9 md:h-9 text-white">
                <use href="#user"></use>
              </svg>
            </div>
            <div class="flex flex-col gap-y-1.5 md:gap-y-2 text-white">
              <span class="text-sm font-DanaMedium">ثبت نام شده ها</span>
              <span class="font-DanaDemiBold text-sm md:text-lg">5 نفر</span>
            </div>
          </div>
          <div class="flex items-center gap-x-2.5 md:gap-x-4 flex-grow md:flex-grow-0 md:w-60 bg-green-500  p-2 rounded-2xl">
            <div class="flex-center w-14 h-14 md:w-[68px] md:h-[68px] bg-white/20 rounded-2xl">
              <svg class="w-8 h-8 md:w-9 md:h-9 text-white">
                <use href="#money"></use>
              </svg>
            </div>
            <div class="flex flex-col gap-y-1.5 md:gap-y-2 text-white">
              <span class="text-sm font-DanaMedium">مقدار کل در آمد</span>
              <span class="font-DanaDemiBold text-sm md:text-lg">25,402,000</span>
            </div>
          </div>
          <div class="flex items-center gap-x-2.5 md:gap-x-4 flex-grow md:flex-grow-0 md:w-60 bg-red-500  p-2 rounded-2xl">
            <div class="flex-center w-14 h-14 md:w-[68px] md:h-[68px] bg-white/20 rounded-2xl">
              <svg class="w-8 h-8 md:w-9 md:h-9 text-white">
                <use href="#chat-bubble-left-right"></use>
              </svg>
            </div>
            <div class="flex flex-col gap-y-1.5 md:gap-y-2 text-white">
              <span class="text-sm font-DanaMedium">تعداد کامنت ها</span>
              <span class="font-DanaDemiBold text-sm md:text-lg">4 تا</span>
            </div>
          </div>
          <div class="flex items-center gap-x-2.5 md:gap-x-4 flex-grow md:flex-grow-0 md:w-60 bg-blue-600  p-2 rounded-2xl">
            <div class="flex-center w-14 h-14 md:w-[68px] md:h-[68px] bg-white/20 rounded-2xl">
              <svg class="w-8 h-8 md:w-9 md:h-9 text-white">
                <use href="#shopping-cart"></use>
              </svg>
            </div>
            <div class="flex flex-col gap-y-1.5 md:gap-y-2 text-white">
              <span class="text-sm font-DanaMedium">تعداد فروش</span>
              <span class="font-DanaDemiBold text-sm md:text-lg">4 تا</span>
            </div>
          </div>
          
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    </>
  );
}

export default Main;
