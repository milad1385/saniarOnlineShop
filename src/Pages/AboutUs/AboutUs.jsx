import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import FooterMenu from "../../Components/FooterMenu/FooterMenu";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container bg-white rounded-md shadow py-5 px-6 mt-10">
        <div>
          <h3 className="font-MorabbaBold text-blue-600 text-xl lg:text-4xl">
            درباره ما
          </h3>
          <p className="font-DanaMedium text-base/[28px] md:text-lg/[34px] text-gray-700 mt-5">
            سلام ، من میلاد سلامیان هستم این قالب فروشگاهی سانیار را به عنوان
            نمونه کار خودم ساختم تا با استفاده از آن مهارتم را به شما نشان دهم ،
            در سایت فروشگاهی سانیار میتوانید به راحتی انواع کالا های الکترونیکی
            ، عمومی ، مواد غذایی ، پوشاک و ... را با بهترین قیمت خریداری کنید ❤️
            ، ما مطمینیم که شما از خرید از ما رضایت کافی را خواهید داشت زیرا
            امکان مشاوره قبل از خرید به شکل کاملا رایگان و تضمین اصالت اجناس را
            برای شما مشتری های عزیز به ارمغان می آوریم امیدوارم لز خرید در
            فروشگاه ما لذت کافی را برده باشید ✌️
          </p>
        </div>
        <div className="mt-10">
          <h3 className="font-MorabbaBold text-blue-600 text-xl lg:text-4xl">
            ارتباط با ما
          </h3>
          <div className="mt-5 md:mt-14 flex items-center justify-around">
            <div className="flex items-center gap-3 flex-col">
              <svg class="w-10 h-10 md:w-28 md:h-28 text-black">
                <use href="#telegram"></use>
              </svg>
              <a href="#" className="font-DanaDemiBold text-base md:text-xl">تلگرام</a>
            </div>
            <div className="flex items-center gap-3 flex-col">
              <svg class="w-10 h-10 md:w-28 md:h-28 shrink-0 text-black">
                <use href="#instagram"></use>
              </svg>
              <a href="#" className="font-DanaDemiBold text-base md:text-xl">اینستاگرام</a>
            </div>
            <div className="flex items-center gap-3 flex-col">
              <img src="/images/github.svg" className="w-10 h-10 md:w-28 md:h-28"/>
              <a href="https://github.com/milad1385" className="font-DanaDemiBold text-base md:text-xl">گیت هاب</a>
            </div>
            <div className="flex items-center gap-3 flex-col">
              <img src="/images/whatsapp.svg" className="w-10 h-10 md:w-28 md:h-28"/>
              <a href="#" className="font-DanaDemiBold text-base md:text-xl">واتساپ</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FooterMenu />
    </>
  );
}

export default AboutUs;
