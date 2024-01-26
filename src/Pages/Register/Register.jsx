import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="body">
        <div className="flex-center container">
          <div className="form-wrapper md:relative md:z-40  shadow bg-white rounded-md  flex-center flex-col mt-10 p-8">
            <h1 className="font-DanaDemiBold text-xl md:text-2xl">
              ایجاد حساب کاربری
            </h1>
            <h4 className="font-DanaDemiBold text-xs md:text-sm text-gray-600 mt-2 md:mt-1">
              به خانواده سانیار خوش آمدی :)
            </h4>
            <div className="bg-gray-300 w-full p-4 md:p-5 flex-center mt-2 rounded-[5px]">
              <span className="font-DanaDemiBold text-sm md:text-base">آیا حساب کاربری دارید ؟</span>
              <span className="form-wrapper__user-link">
                <Link
                  to={"/login"}
                  className="bg-gray-600 text-white font-DanaDemiBold p-1 rounded-md text-xs md:text-sm py-1.5 mr-2"
                >
                  ورود به حساب
                </Link>
              </span>
            </div>
            <form action="#" className="mt-6 space-y-4">
              <div className="flex items-center justify-between rounded-[5px] shadow border border-gray-300 p-2">
                <input
                  type="text"
                  className="w-full outline-none font-DanaMedium h-full pr-2 text-sm md:text-base"
                  id="realname"
                  placeholder="نام و نام خانوادگی"
                />
                <svg className="w-6 md:w-7 md:h-7 h-6">
                  <use href="#user"></use>
                </svg>
              </div>
              <div className="flex items-center justify-between rounded-[5px] shadow border border-gray-300 p-2">
                <input
                  type="text"
                  className="w-full outline-none font-DanaMedium h-full pr-2 text-sm md:text-base"
                  id="username"
                  placeholder="نام کاربری"
                />
                <svg className="w-6 md:w-7 h-6  md:h-7">
                  <use href="#user-name"></use>
                </svg>
              </div>
              <div className="flex items-center justify-between rounded-[5px] shadow border border-gray-300 p-2">
                <input
                  type="text"
                  className="w-full  outline-none font-DanaMedium h-full pr-2 text-sm md:text-base"
                  id="email"
                  placeholder="ایمیل"
                  autoComplete={false}
                />
                <svg className="w-6 md:w-7 h-6 md:h-7 ">
                  <use href="#envelope"></use>
                </svg>
              </div>
              <div className="flex items-center justify-between rounded-[5px] shadow border border-gray-300 p-2">
                <input
                  type="text"
                  className="w-full  outline-none font-DanaMedium h-full pr-2 text-sm md:text-base"
                  id="phone"
                  placeholder="شماره تلفن"
                  autoComplete={false}
                />
                <svg className="w-6 md:w-7 h-6 md:h-7">
                  <use href="#phone"></use>
                </svg>
              </div>
              <div className="flex items-center justify-between rounded-[5px] shadow border border-gray-300 p-2">
                <input
                  type="text"
                  className="w-full  outline-none font-DanaMedium h-full pr-2 text-sm md:text-base"
                  id="email"
                  placeholder="رمز عبور"
                  autoComplete={false}
                />
                <svg className="w-6 md:w-7 h-6 md:h-7">
                  <use href="#lock"></use>
                </svg>
              </div>
              <div className="flex items-center justify-between rounded-[5px] shadow border border-gray-300 p-2">
                <input
                  type="file"
                  className="text-sm md:text-base"
                />
                <svg className="w-6 md:w-7 h-6 md:h-7">
                  <use href="#image"></use>
                </svg>
              </div>
              <div className="bg-blue-600 relative text-base text-white font-DanaDemiBold p-3 flex-center md:text-lg rounded-md shadow-blue cursor-pointer">
                <button className="form-fildes__btn " id="login">
                  ثبت نام
                </button>
                <svg className="w-7 h-7 absolute right-3.5">
                  <use href="#arrow-left-on-rectangle"></use>
                </svg>
              </div>
              <div className="login-des text-sm">
                <span className="font-DanaDemiBold">سلام کاربر محترم:</span>
                <ul className="login-des-list space-y-1 mt-2">
                  <li className="login-des-item line-clamp-1">
                    لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس
                    استفاده کنید.
                  </li>
                  <li className="login-des-item line-clamp-1">
                    ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
                  </li>
                  <li className="login-des-item line-clamp-1">
                    لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
