import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../App";

function MyInfo() {
  const { setIsShowAdminMenu } = useContext(AppContext);
  useEffect(() => {
    setIsShowAdminMenu(false);
  }, []);
  return (
    <div className="container pb-5">
      <h3 className="font-Lalezar text-xl md:text-3xl mt-10 mb-6">
        ویرایش <span className="text-blue-600">اطلاعات من</span>
      </h3>
      <div class="relative my-16 flex-center">
        <img
          src="/images/user.png"
          class="w-32 md:w-44 h-32 md:h-44 rounded-full"
        />
        <Link
          class="absolute bottom-0  right-[120px] md:right-[510px] flex-center w-10 md:w-14 h-10 md:h-14 rounded-full bg-blue-600  border-2 md:border-4 border-white  cursor-pointer transition-colors"
          to="/"
        >
          <svg class="w-5 md:w-6 h-5 md:h-6 text-white">
            <use href="#arrow-path-rounded-square"></use>
          </svg>
        </Link>
      </div>
      <div className="bg-white py-6 px-6 rounded-md shadow font-Dana text-zinc-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-6 text-sm md:text-base">
          <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <input
              type="text"
              placeholder="نام کاربر را وارد کنید ..."
              className="outline-none w-full bg-gray-100"
            />
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#user"></use>
            </svg>
          </div>
          <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <input
              type="text"
              placeholder="نام کاربری کاربر را وارد کنید ..."
              className="outline-none w-full bg-gray-100"
            />
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#telegram"></use>
            </svg>
          </div>
          <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <input
              type="text"
              placeholder="شماره تلفن کاربر را وارد کنید ..."
              className="outline-none w-full bg-gray-100"
            />
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#phone"></use>
            </svg>
          </div>
          <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <input
              type="text"
              placeholder="ایمیل کاربر را وارد کنید ..."
              className="outline-none w-full bg-gray-100"
            />
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#envelope"></use>
            </svg>
          </div>
          <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <input
              type="text"
              placeholder="رمز عبور کاربر را وارد کنید ..."
              className="outline-none w-full bg-gray-100"
            />
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#lock"></use>
            </svg>
          </div>
        </div>
        <button className="bg-blue-600  font-Lalezar p-2 rounded-md text-white text-base md:text-xl shadow-blue mt-6">
          ویرایش اطلاعات من
        </button>
      </div>
    </div>
  );
}

export default MyInfo;
