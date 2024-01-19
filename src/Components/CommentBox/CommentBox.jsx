import React from "react";

function CommentBox() {
  return (
    <div className="border border-gray-200 rounded-md p-4 mt-10 shadow">
      <div>
        <div className="bg-[#eee] p-2.5 rounded-lg shadow flex items-center justify-between flex-wrap">
          <div className="flex items-center gap-x-3">
            <div className="flex-center bg-white rounded-full w-[60px] h-[60px] shadow">
              <img
                src="/images/user.png"
                alt="user-image"
                className="w-[50px] h-[50px] rounded-full"
              />
            </div>
            <div className="flex items-center gap-x-2.5 font-DanaDemiBold">
              <span className="text-sm md:text-base">میلاد سلامیان</span>
              <span className="text-sm md:text-base">1402/05/08</span>
            </div>
          </div>
          <div className="flex gap-x-0.5 flex-row-reverse grow">
            <svg className="w-5 md:w-6 h-5 md:h-6 text-gray-400">
              <use href="#star"></use>
            </svg>
            <svg className="w-5 md:w-6 h-5 md:h-6 text-gray-400">
              <use href="#star"></use>
            </svg>
            <svg className="w-5 md:w-6 h-5 md:h-6 text-yellow-400">
              <use href="#star"></use>
            </svg>
            <svg className="w-5 md:w-6 h-5 md:h-6 text-yellow-400">
              <use href="#star"></use>
            </svg>
            <svg className="w-5 md:w-6 h-5 md:h-6 text-yellow-400">
              <use href="#star"></use>
            </svg>
          </div>
        </div>
        <p className="mt-4 text-gray-600 text-sm/[28px] md:text-base/[32px]">
          بنده این گوشی را خریداری کردم و کاملا راضی هشتم و بهترین گارانتی را
          دارد و پلپ بود و حتما به شما هم پیشنهاد می نمایم که چنانچه قصد خرید
          این کالا را دارید از دیجی کالا تهیه نمایید ؛پارت نامبر من هم سنگاپور
          بود که بهترین پارت نامبر در بازار است و هیچ محدودیتی ندارد.
        </p>
        <div className="text-sm mt-4">
          <ul className="space-y-3 font-DanaDemiBold text-gray-700">
            <li className="flex items-center gap-x-1">
              <svg className="w-4 md:w-5 h-5 md:h-5 text-green-600">
                <use href="#plus"></use>
              </svg>
              <span>جنس بدنه</span>
            </li>
            <li className="flex items-center gap-x-1">
              <svg className="w-4 md:w-5 h-5 md:h-5 text-green-600">
                <use href="#plus"></use>
              </svg>
              <span>کیفیت تصویر</span>
            </li>
            <li className="flex items-center gap-x-1">
              <svg className="w-4 md:w-5 h-5 md:h-5 text-green-600">
                <use href="#plus"></use>
              </svg>
              <span>شارژ باطری</span>
            </li>
          </ul>
          <ul className="space-y-3 font-DanaDemiBold text-gray-700 mt-5">
            <li className="flex items-center gap-x-1">
              <svg className="w-4 md:w-5 h-5 md:h-5 text-red-600">
                <use href="#minus"></use>
              </svg>
              <span>جنس بدنه</span>
            </li>
            <li className="flex items-center gap-x-1">
              <svg className="w-4 md:w-5 h-5 md:h-5 text-red-600">
                <use href="#minus"></use>
              </svg>
              <span>کیفیت تصویر</span>
            </li>
            <li className="flex items-center gap-x-1">
              <svg className="w-4 md:w-5 h-5 md:h-5 text-red-600">
                <use href="#minus"></use>
              </svg>
              <span>شارژ باطری</span>
            </li>
          </ul>
        </div>
        <button className="bg-[#FFA41B] text-white px-5 py-1 rounded-md shadow-yellow mt-5">
          پاسخ
        </button>
        {/* start comment answer */}
        <div className="border border-gray-200 bg-[#ffa41b31] rounded-md p-4 mt-10 shadow">
          <div className="bg-white p-2.5 rounded-lg shadow flex items-center justify-between flex-wrap">
            <div className="flex items-center gap-x-3">
              <div className="flex-center bg-gray-200 rounded-full w-[60px] h-[60px] shadow">
                <img
                  src="/images/user.png"
                  alt="user-image"
                  className="w-[50px] h-[50px] rounded-full"
                />
              </div>
              <div className="flex items-center gap-x-2.5 font-DanaDemiBold">
                <span className="text-sm md:text-base">میلاد سلامیان</span>
                <span className="text-sm md:text-base">1402/05/08</span>
              </div>
            </div>
            <div className="flex gap-x-0.5 flex-row-reverse grow">
              <svg className="w-5 md:w-6 h-5 md:h-6 text-gray-400">
                <use href="#star"></use>
              </svg>
              <svg className="w-5 md:w-6 h-5 md:h-6 text-gray-400">
                <use href="#star"></use>
              </svg>
              <svg className="w-5 md:w-6 h-5 md:h-6 text-yellow-400">
                <use href="#star"></use>
              </svg>
              <svg className="w-5 md:w-6 h-5 md:h-6 text-yellow-400">
                <use href="#star"></use>
              </svg>
              <svg className="w-5 md:w-6 h-5 md:h-6 text-yellow-400">
                <use href="#star"></use>
              </svg>
            </div>
          </div>
          <p className="mt-4 text-gray-600 text-sm/[28px] md:text-base/[32px]">
            بنده این گوشی را خریداری کردم و کاملا راضی هشتم و بهترین گارانتی را
            دارد و پلپ بود و حتما به شما هم پیشنهاد می نمایم که چنانچه قصد خرید
            این کالا را دارید از دیجی کالا تهیه نمایید ؛پارت نامبر من هم سنگاپور
            بود که بهترین پارت نامبر در بازار است و هیچ محدودیتی ندارد.
          </p>
          <div className="text-sm mt-4">
            <ul className="space-y-3 font-DanaDemiBold text-gray-700">
              <li className="flex items-center gap-x-1">
                <svg className="w-4 md:w-5 h-5 md:h-5 text-green-600">
                  <use href="#plus"></use>
                </svg>
                <span>جنس بدنه</span>
              </li>
              <li className="flex items-center gap-x-1">
                <svg className="w-4 md:w-5 h-5 md:h-5 text-green-600">
                  <use href="#plus"></use>
                </svg>
                <span>کیفیت تصویر</span>
              </li>
              <li className="flex items-center gap-x-1">
                <svg className="w-4 md:w-5 h-5 md:h-5 text-green-600">
                  <use href="#plus"></use>
                </svg>
                <span>شارژ باطری</span>
              </li>
            </ul>
            <ul className="space-y-3 font-DanaDemiBold text-gray-700 mt-5">
              <li className="flex items-center gap-x-1">
                <svg className="w-4 md:w-5 h-5 md:h-5 text-red-600">
                  <use href="#minus"></use>
                </svg>
                <span>جنس بدنه</span>
              </li>
              <li className="flex items-center gap-x-1">
                <svg className="w-4 md:w-5 h-5 md:h-5 text-red-600">
                  <use href="#minus"></use>
                </svg>
                <span>کیفیت تصویر</span>
              </li>
              <li className="flex items-center gap-x-1">
                <svg className="w-4 md:w-5 h-5 md:h-5 text-red-600">
                  <use href="#minus"></use>
                </svg>
                <span>شارژ باطری</span>
              </li>
            </ul>
          </div>
          <button className="bg-[#FFA41B] text-white px-5 py-1 rounded-md shadow-yellow mt-5">
            پاسخ
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentBox;
