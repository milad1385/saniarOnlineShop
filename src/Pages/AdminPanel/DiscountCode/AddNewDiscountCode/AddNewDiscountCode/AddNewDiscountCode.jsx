import React from "react";

function AddNewDiscountCode() {
  return (
    <>
      <h3 className="font-Lalezar text-xl md:text-3xl mt-10 mb-6">
        اضافه کردن <span className="text-blue-600">کد تخفیف</span>
      </h3>
      <div className="bg-white py-6 px-6 rounded-md shadow font-Dana text-zinc-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-6 text-sm md:text-base">
          <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <input
              type="text"
              placeholder=" کد تخفیف را وارد کنید ..."
              className="outline-none w-full bg-gray-100"
            />
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#square"></use>
            </svg>
          </div>
          <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <input
              type="text"
              placeholder="درصد کد تخفیف را وارد کنید..."
              className="outline-none w-full bg-gray-100"
            />
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#life-style"></use>
            </svg>
          </div>
          <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <input
              type="text"
              placeholder="حداکثر استفاده کد تخفیف را وارد کنید..."
              className="outline-none w-full bg-gray-100"
            />
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#gift"></use>
            </svg>
          </div>
          <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <select className="outline-none w-full bg-gray-100">
              <option value="-1">نام محصول را انتخاب کنید</option>
              <option value="5">موبایل</option>
              <option value="6">لپ تاپ</option>
            </select>
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#shop-card"></use>
            </svg>
          </div>
        </div>
        <button className="bg-blue-600  font-Lalezar p-2 rounded-md text-white text-sm md:text-xl shadow-blue mt-6">
          ایجاد کد تخفیف
        </button>
      </div>
    </>
  );
}

export default AddNewDiscountCode;
