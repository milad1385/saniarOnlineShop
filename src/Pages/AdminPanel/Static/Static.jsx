import React from "react";
import AdsList from "./AdsList/AdsList";
import LogoAndIcon from "./LogoAndIcon/LogoAndIcon";

function Static() {
  return (
    <div className="container">
      <h3 className="font-Lalezar text-xl md:text-3xl mt-10 mb-6">
        تغییر محتوای <span className="text-blue-600">استاتیک</span>
      </h3>
      <div className="space-y-10 pb-8">
        <div className="bg-white pt-3 pb-6 px-6 rounded-md shadow font-Dana text-zinc-700">
          <h3 className="font-Lalezar text-xl md:text-2xl mb-6">
            تغییر متن <span className="text-blue-600">فوتر</span>
          </h3>
          <div className="flex items-center justify-between bg-gray-100 relative py-2 px-3 rounded-lg">
            <textarea
              type="text"
              placeholder="متن جدید فوتر را بنویسید ...."
              className="outline-none w-full bg-gray-100 h-36 text-sm md:text-base"
            ></textarea>
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600 absolute top-2 left-2 md:top-4 md:left-4">
              <use href="#square"></use>
            </svg>
          </div>
          <button className="bg-blue-600  font-Lalezar p-2 rounded-md text-white text-sm md:text-xl shadow-blue mt-6">
            تغییر متن فوتر
          </button>
        </div>
        <div className="bg-white pt-3 pb-6 px-6 rounded-md shadow font-Dana text-zinc-700">
          <h3 className="font-Lalezar text-xl md:text-2xl mb-6">
            تغییر <span className="text-blue-600">آدرس ها</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-6 text-sm md:text-base">
            <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
              <input
                type="text"
                placeholder=" آدرس سایت را وارد کنید ..."
                className="outline-none w-full bg-gray-100"
              />
              <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
                <use href="#map"></use>
              </svg>
            </div>
            <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
              <input
                type="text"
                placeholder="ایمیل سایت را وارد کنید ..."
                className="outline-none w-full bg-gray-100"
              />
              <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
                <use href="#envelope"></use>
              </svg>
            </div>
            <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
              <input
                type="text"
                placeholder="آدرس تلگرام سایت را وارد کنید ..."
                className="outline-none w-full bg-gray-100"
              />
              <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
                <use href="#telegram"></use>
              </svg>
            </div>
            <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
              <input
                type="text"
                placeholder="آدرس اینستاگرام سایت را وارد کنید ..."
                className="outline-none w-full bg-gray-100"
              />
              <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
                <use href="#instagram"></use>
              </svg>
            </div>
            <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
              <input
                type="text"
                placeholder="تلفن سایت را وارد کنید ..."
                className="outline-none w-full bg-gray-100"
              />
              <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
                <use href="#phone"></use>
              </svg>
            </div>
          </div>
          <button className="bg-blue-600  font-Lalezar p-2 rounded-md text-white text-sm md:text-xl shadow-blue mt-6">
            تغییر آدرس
          </button>
        </div>
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
        <AdsList />
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
                <input
                  type="file"
                  className="outline-none w-full bg-gray-100"
                />
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
                <input
                  type="file"
                  className="outline-none w-full bg-gray-100"
                />
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
        <LogoAndIcon/>
      </div>
    </div>
  );
}

export default Static;
