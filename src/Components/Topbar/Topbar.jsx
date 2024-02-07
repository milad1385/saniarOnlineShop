import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

function Topbar() {
  const { isLogin, userInfo } = useContext(AppContext);
  console.log(isLogin, userInfo);
  return (
    <div className="hidden md:block shadow-lg pb-1 bg-white relative z-40">
      <div className="py-[30px] flex items-center justify-between container ">
        <div className="flex items-center justify-between gap-x-6">
          <img
            src="/images/logo.png"
            className="w-[170px] xl:w-[220px] select-none"
            alt="logo"
          />
          <div className="flex items-center border border-gray-200  lg:w-[350px] xl:w-[500px] bg-gray-100 py-[5px] px-[5px] text-base rounded-full justify-between">
            <input
              type="text"
              className="border-none outline-none w-full px-[px] bg-gray-100"
              placeholder="جستجو محصولات"
            />
            <button className="bg-blue-600 text-white p-2 flex items-center justify-center rounded-full shadow-blue">
              <svg className="w-6 h-6">
                <use href="#magni-glass"></use>
              </svg>
            </button>
          </div>
        </div>
        <div className="text-lg flex items-center gap-x-1.5">
          <div className="flex items-center gap-x-2 shadow-gray border border-gray-200 py-3 px-3 rounded-3xl">
            <svg className="w-6 h-6">
              <use href="#user"></use>
            </svg>
            {isLogin ? (
              <Link
                to={"/my-account"}
                className="hidden xl:block text-sm font-DanaMedium"
              >
                {userInfo.name}
              </Link>
            ) : (
              <Link
                to={"/login"}
                className="hidden xl:block text-sm font-DanaMedium"
              >
                ثبت نام | ورود
              </Link>
            )}
          </div>
          <div className="shadow-gray w-[50px] h-[50px] rounded-full flex items-center justify-center border border-gray-200">
            <svg className="w-6 h-6">
              <use href="#check"></use>
            </svg>
          </div>
          <div className="flex items-center gap-x-4 shadow-gray border border-gray-200 py-3 xl:py-2 px-3 rounded-full xl:rounded-3xl">
            <svg className="w-6 h-6">
              <use href="#shop"></use>
            </svg>
            <div className="hidden xl:flex bg-blue-600 shadow-blue text-white  items-center justify-center rounded-full xl:w-[30px] xl:h-[30px] text-sm">
              5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
