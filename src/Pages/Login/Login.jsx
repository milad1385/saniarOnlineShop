import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="body">
        <div className="flex-center p-2.5 md:p-0">
          <div className="form-wrapper  md:relative md:z-40  shadow bg-white rounded-md  flex-center flex-col mt-10 px-5 py-8 md:p-8">
            <h1 className="font-DanaDemiBold text-xl md:text-2xl">
              ورود به حساب کاربری
            </h1>
            <h4 className="font-DanaDemiBold text-xs md:text-sm text-gray-600 mt-2 md:mt-1">
              خوشحالیم دوباره میبینیمت دوست عزیز :)
            </h4>
            <div className="bg-gray-300 w-full p-5 flex-center mt-2 rounded-[5px]">
              <span className="font-DanaDemiBold text-sm md:text-base">
                کاربر جدید هستید؟
              </span>
              <span className="flex items-center justify-center">
                <Link
                  to={"/register"}
                  className="bg-gray-600 text-white font-DanaDemiBold p-1 rounded-md mr-2 flex-center text-xs py-1.5 md:text-neutral-50"
                >
                  ثبت نام
                </Link>
                <Link
                  to={"/otp-login"}
                  className="bg-gray-600 text-white font-DanaDemiBold p-1 rounded-md  block mr-2 text-xs py-1.5 md:text-neutral-50"
                >
                  ورود با کد
                </Link>
              </span>
            </div>
            <form className="mt-6 space-y-4">
              <div className="flex items-center justify-between rounded-[5px] shadow border border-gray-300 p-2">
                <input
                  type="text"
                  className=" w-full outline-none font-DanaMedium h-full pr-2 text-sm md:text-base"
                  id="username"
                  placeholder="نام کاربری یا آدرس ایمیل"
                />
                <svg className="w-7 h-7">
                  <use href="#user"></use>
                </svg>
              </div>
              <div className="flex items-center justify-between rounded-[5px] shadow border border-gray-300 p-2">
                <input
                  type="text"
                  className="w-full  outline-none font-DanaMedium h-full pr-2 text-sm md:text-base"
                  id="password"
                  placeholder="رمز عبور"
                  autoComplete={false}
                />
                <svg className="w-7 h-7">
                  <use href="#lock"></use>
                </svg>
              </div>
              <div className="bg-blue-600 relative text-white font-DanaDemiBold p-3 flex-center text-base md:text-lg rounded-md shadow-blue cursor-pointer">
                <button id="login">
                  ورود
                </button>
                <svg className="w-7 h-7 absolute right-3.5">
                  <use href="#arrow-left-on-rectangle"></use>
                </svg>
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    className="login-form__password-checkbox"
                  />
                  <span className="font-DanaMedium text-xs md:text-base">
                    مرا به خاطر داشته باش
                  </span>
                </label>
                <label className="font-DanaMedium text-xs md:text-base">
                  <a href="#">رمز عبور را فراموش کرده اید؟</a>
                </label>
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

export default Login;
