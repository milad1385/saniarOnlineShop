import React, { useId } from "react";
import PageTitle from "../../../../Components/AdminPanel/PageTitle/PageTitle";

function AddNewMenu() {
  return (
    <>
      <PageTitle key={useId()} main={'منو'} desc={' اضافه کردن '}/>
      <div className="bg-white py-6 px-6 rounded-md shadow font-Dana text-zinc-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-6 text-sm md:text-base">
          <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <input
              type="text"
              placeholder="  نام منو را وارد کنید ..."
              className="outline-none w-full bg-gray-100"
            />
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#square"></use>
            </svg>
          </div>
          <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <input
              type="text"
              placeholder="  لینک منو را وارد کنید..."
              className="outline-none w-full bg-gray-100"
            />
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#link"></use>
            </svg>
          </div>
          <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <select className="outline-none w-full bg-gray-100">
              <option value="-1">پرنت منو را انتخاب کنید</option>
              <option value="5">موبایل</option>
              <option value="6">لپ تاپ</option>
            </select>
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#shop-card"></use>
            </svg>
          </div>
        </div>
        <button className="bg-blue-600  font-Lalezar p-2 rounded-md text-white text-sm md:text-xl shadow-blue mt-6">
          ایجاد منو 
        </button>
      </div>
    </>
  );
}

export default AddNewMenu;
