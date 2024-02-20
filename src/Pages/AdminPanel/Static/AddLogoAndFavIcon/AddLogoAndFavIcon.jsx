import React from "react";

function AddLogoAndFavIcon() {
  return (
    <div className="bg-white pt-3 pb-6 px-6 rounded-md shadow font-Dana text-zinc-700">
      <h3 className="font-Lalezar text-xl md:text-2xl mb-6">
        ایجاد <span className="text-blue-600">لوگو و فاو آیکون</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-6 text-sm md:text-base">
        <div className="flex flex-col gap-y-2">
          <label className="text-sm md:text-lg font-DanaDemiBold" htmlFor="">
            لوگو سایت
          </label>
          <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <input type="file" className="outline-none w-full bg-gray-100" />
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#image"></use>
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="text-sm md:text-lg font-DanaDemiBold" htmlFor="">
            فاو آیکون سایت
          </label>
          <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <input type="file" className="outline-none w-full bg-gray-100" />
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#square"></use>
            </svg>
          </div>
        </div>
      </div>
      <button className="bg-blue-600  font-Lalezar p-2 rounded-md text-white text-sm md:text-xl shadow-blue mt-6">
        ایجاد لوگو و آیکون
      </button>
    </div>
  );
}

export default AddLogoAndFavIcon;
