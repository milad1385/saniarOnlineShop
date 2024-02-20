import React from "react";

function AddNewAds() {
  return (
    <div className="bg-white pt-3 pb-6 px-6 rounded-md shadow font-Dana text-zinc-700">
      <h3 className="font-Lalezar text-xl md:text-2xl mb-6">
        ایجاد <span className="text-blue-600">شعار ها</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-6 text-sm md:text-base">
        <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
          <input
            type="text"
            placeholder=" عنوان شعار سایت را وارد کنید ..."
            className="outline-none w-full bg-gray-100"
          />
          <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
            <use href="#article"></use>
          </svg>
        </div>
        <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
          <input
            type="text"
            placeholder="توضیحات شعار سایت را وارد کنید ..."
            className="outline-none w-full bg-gray-100"
          />
          <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
            <use href="#square"></use>
          </svg>
        </div>
        <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
          <input type="file" className="outline-none w-full bg-gray-100" />
          <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
            <use href="#image"></use>
          </svg>
        </div>
      </div>
      <button className="bg-blue-600  font-Lalezar p-2 rounded-md text-white text-sm md:text-xl shadow-blue mt-6">
        ایجاد شعار
      </button>
    </div>
  );
}

export default AddNewAds;
