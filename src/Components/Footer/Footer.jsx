import React from "react";
import { Link } from "react-router-dom";
import useGetText from "../../Hooks/AdminPanel/static/footer/useGetText";
import useGetAll from "../../Hooks/AdminPanel/static/address/useGetAll";

function Footer() {
  const { data: footerText } = useGetText();
  const { data: info } = useGetAll();
  return (
    <footer className="relative  bg-white text-zinc-700  py-10 md:py-8 md:pb-8 md:pt-[62px] shadow-xl mt-8 ">
      <svg className="absolute rotate-180 -top-[1px]  inline-block left-0 right-0 mx-auto w-[100px] h-[22px] text-gray-100 dark:text-zinc-800">
        <use href="#curve"></use>
      </svg>
      <div
        className="absolute left-0 right-0 top-0 mx-auto -translate-y-2/4  flex items-center justify-center w-[30px] h-[30px] border-2 border-blue-600 rounded-full "
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
      >
        <svg className="w-5 h-5 text-zinc-800 dark:text-gray-100 rotate-180">
          <use href="#chevron-down-mini"></use>
        </svg>
      </div>
      <div className="w-[98%] lg:w-[90%] mx-auto px-2.5 md:px-0">
        <div className="flex flex-wrap  justify-between border-b border-b-zinc-300 pb-4">
          <div>
            <div className="flex items-center gap-x-3.5 mb-3">
              <img
                src="/images/logo.png"
                className="w-180px h-12 select-none"
              />
              <svg className="w-[100px] md:w-[130px] h-10 md:h-14 text-gray-300">
                <use href="#logo-type"></use>
              </svg>
            </div>
            <p className="md:text-lg/[48px] text-sm xl:max-w-[600px] select-none">
              {footerText?.length ? footerText[0]?.text : ""}
            </p>
          </div>
          <div className="mt-[26px] child:select-none">
            <h3 className="text-lg md:text-xl font-DanaDemiBold text-zinc-700">
              دسترسی سریع
            </h3>
            <div className="grid grid-cols-2 mt-6 gap-x-3.5">
              <div className="flex flex-col gap-y-2.5 text-sm md:text-lg">
                <a
                  href="#"
                  className="flex items-center gap-x-1.5 md:gap-x-2.5"
                >
                  <span className="block w-2.5 h-1 bg-blue-600 rounded-full"></span>
                  حریم خصوصی
                </a>
                <a
                  href="#"
                  className="flex items-center gap-x-1.5 md:gap-x-2.5"
                >
                  <span className="block w-2.5 h-1 bg-blue-600 rounded-full"></span>
                  شرایط استفاده
                </a>
                <a
                  href="#"
                  className="flex items-center gap-x-1.5 md:gap-x-2.5"
                >
                  <span className="block w-2.5 h-1 bg-blue-600 rounded-full"></span>
                  پرسش های متدوال
                </a>
                <a
                  href="#"
                  className="flex items-center gap-x-1.5 md:gap-x-2.5"
                >
                  <span className="block w-2.5 h-1 bg-blue-600 rounded-full"></span>
                  ضمانت نامه ها
                </a>
              </div>
              <div className="flex flex-col gap-y-2.5 text-sm md:text-lg">
                <a
                  href="#"
                  className="flex items-center gap-x-1.5 md:gap-x-2.5"
                >
                  <span className="block w-2.5 h-1 bg-blue-600 rounded-full"></span>
                  عودت کالا
                </a>
                <a
                  href="#"
                  className="flex items-center gap-x-1.5 md:gap-x-2.5"
                >
                  <span className="block w-2.5 h-1 bg-blue-600 rounded-full"></span>
                  ثبت سفارش
                </a>
                <a
                  href="#"
                  className="flex items-center gap-x-1.5 md:gap-x-2.5"
                >
                  <span className="block w-2.5 h-1 bg-blue-600 rounded-full"></span>
                  فرصت های شغلی
                </a>
                <Link
                  to="/contact-us"
                  className="flex items-center gap-x-1.5 md:gap-x-2.5"
                >
                  <span className="block w-2.5 h-1 bg-blue-600 rounded-full"></span>
                  ارتباط با ما
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-[23px]">
            <h3 className="text-lg md:text-xl font-DanaDemiBold text-zinc-700">
              {" "}
              در تماس باشید
            </h3>
            <div className="flex items-center gap-x-1.5 mt-6">
              <svg className="w-6 h-6">
                <use href="#map"></use>
              </svg>
              <p>{info?.length ? info[0]?.address : ""}</p>
            </div>
            <div className="mt-4 flex items-center justify-between flex-wrap gap-x-2.5">
              <div className="flex items-center gap-x-1.5 text-blue-600">
                <svg className="w-6 h-6">
                  <use href="#envelop"></use>
                </svg>
                <a href="mailto:golden@gmail.com">
                  {info?.length ? info[0]?.email : ""}
                </a>
              </div>
              <div className="flex items-center gap-x-1.5">
                <svg className="w-5 h-5">
                  <use href="#phone"></use>
                </svg>
                <p>{info?.length ? info[0]?.phone : ""}</p>
              </div>
            </div>
            <div className="flex items-center text-base md:text-lg gap-x-6 mt-3">
              <a
                href="#"
                className="ltr-text flex-grow gap-x-2 text-sm md:text-base text-blue-600 border border-blue-600 rounded-xl flex-center  h-12 px-2"
              >
                @{info?.length ? info[0]?.instagram : ""}
                <svg className="w-[26px] shrink-0 h-26px md:w-[36px] md:h-[36px]">
                  <use href="#instagram"></use>
                </svg>
              </a>
              <a
                href="#"
                className="ltr-text flex-grow gap-x-2 text-sm md:text-base bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl flex-center  h-12 px-2"
              >
                @{info?.length ? info[0]?.telegram : ""}
                <svg className="w-[26px] shrink-0 h-26px md:w-[36px] md:h-[36px]">
                  <use href="#telegram"></use>
                </svg>
              </a>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-DanaDemiBold text-zinc-700 mt-5">
                خبر نامه
              </h3>
              <div className="bg-gray-200 flex items-center justify-between p-1.5 rounded-md mt-3 shadow">
                <input
                  type="text"
                  placeholder="ایمیل خود را وارد کنید..."
                  className="bg-gray-200 w-full outline-none border-none"
                />
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-DanaDemiBold p-1 rounded-md">
                  عضویت
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-xs md:text-base text-gray-300 font-DanaMedium flex items-center justify-between flex-wrap">
          <div className="flex items-center gap-x-2.5">
            <div className="flex-center shrink-0 w-[30px] h-[30px] border border-zinc-300 rounded-full">
              <div className="flex-center w-5 h-5 border border-zinc-300 rounded-full">
                <div className="w-2.5 h-2.5 bg-gradient-to-t from-blue-600 to-blue-300 rounded-full"></div>
              </div>
            </div>
            <p className="text-zinc-600">
              تمام حقوق این سایت ، متعلق به میلاد شاپ میباشد (توسعه داده شده با{" "}
              <span className="text-blue-600 text-lg md:text-2xl">❤</span> در
              میلاد شاپ)
            </p>
          </div>
          <div className="ltr-text mr-auto mt-2 md:mt-0 text-zinc-500">
            Copyright © 2023 Milad Mall All right reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
