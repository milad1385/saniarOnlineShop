import React, { useEffect } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function ContactUs() {
  useEffect(() => {
    
  }, []);
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="body overflow-x-hidden">
        <div className="flex-center">
          <div className="form-wrapper relative z-40  shadow bg-white rounded-md  flex-center flex-col mt-10 p-8">
            <h1 className="font-DanaDemiBold text-base md:text-2xl">
              ارتباط با ما
            </h1>
            <h4 className="font-DanaDemiBold text-sm text-gray-600 mt-1">
              نظر یا انتقادتو بنویس برامون :)
            </h4>
            <form
              action="#"
              className="form-input__warapper mt-6 space-y-4 w-[25rem]"
            >
              <div className="flex items-center justify-between rounded-[5px] shadow border border-gray-300 p-2">
                <input
                  type="text"
                  className="form-fileds__input w-full outline-none font-DanaMedium h-full pr-2"
                  id="username"
                  placeholder="نام و نام خانوادگی"
                />
                <svg className="w-7 h-7">
                  <use href="#user"></use>
                </svg>
              </div>
              <div className="flex items-center justify-between rounded-[5px] shadow border border-gray-300 p-2">
                <input
                  type="text"
                  className="form-fileds__input w-full  outline-none font-DanaMedium h-full pr-2"
                  id="email"
                  placeholder="ایمیل"
                  autoComplete={false}
                />
                <svg className="w-7 h-7">
                  <use href="#envelope"></use>
                </svg>
              </div>
              <div className="flex items-center justify-between rounded-[5px] shadow border border-gray-300 p-2">
                <input
                  type="text"
                  className="form-fileds__input w-full  outline-none font-DanaMedium h-full pr-2"
                  id="phone"
                  placeholder="شماره تلفن"
                  autoComplete={false}
                />
                <svg className="w-7 h-7">
                  <use href="#phone"></use>
                </svg>
              </div>
              <div className="flex items-center justify-between rounded-[5px] shadow border border-gray-300 p-2">
                <textarea
                  className="h-[130px] w-full outline-none"
                  placeholder="متن خود را وارد کنید ..."
                ></textarea>
              </div>
              <div className="bg-blue-600 relative text-white font-DanaDemiBold p-3 flex-center text-lg rounded-md shadow-blue cursor-pointer">
                <button className="form-fildes__btn " id="login">
                  ارسال
                </button>
                <svg className="w-7 h-7 absolute right-3.5">
                  <use href="#plane"></use>
                </svg>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactUs;
