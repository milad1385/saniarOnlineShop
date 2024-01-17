import React, { useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Footer from "../../Components/Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import SameProduct from "../../Components/SameProduct/SameProduct";
import FooterMenu from "../../Components/FooterMenu/FooterMenu";
import Shoper from "../../Components/Shoper/Shoper";

function ProductPage() {
  const [optionShowModel, setOptionShowModel] = useState("توضیحات کالا");
  const [proves, setProves] = useState([]);
  const [cons, setCons] = useState([]);
  const [proveText, setProveText] = useState("");
  const [consText, setConsText] = useState("");
  const [productCount, setProductCount] = useState(1);
  const [colorChoose, setColorChoose] = useState("");
  const [activeTumb, setActiveTumb] = useState(null);

  const addProves = (e) => {
    if (e.code === "Enter") {
      const newProveObj = {
        id: proves.length + 1,
        title: proveText,
      };
      setProves((prevState) => [...prevState, newProveObj]);
      setProveText("");
    }
  };

  const addCons = (e) => {
    if (e.code === "Enter") {
      const newConsObj = {
        id: cons.length + 1,
        title: consText,
      };
      setCons((prevState) => [...prevState, newConsObj]);
      setConsText("");
    }
  };

  const deleteProves = (proveID) => {
    const newProves = proves.filter((prove) => prove.id !== proveID);
    setProves(newProves);
  };

  const deleteCons = (conID) => {
    const newCons = cons.filter((con) => con.id !== conID);
    setCons(newCons);
  };
  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="container">
        <BreadCrumb
          links={[
            { id: 1, name: "خانه", to: "/" },
            { id: 2, name: "فروشگاه", to: "/" },
            { id: 3, name: "موبایل", to: "/" },
            { id: 4, name: "شیایومی نوت 12", to: "/" },
          ]}
        />
        <div className="pb-5">
          <div className="grid  grid-cols-1 lg:grid-cols-3 bg-white shadow-md rounded-md px-3 py-4">
            <div className="">
              <div className="flex gap-x-3 border border-gray-200 px-3 py-4 rounded-md">
                <div className="flex flex-col gap-y-2">
                  <div className="bg-gray-100 text-zinc-500 w-[30px] h-[30px] flex-center rounded-full">
                    <svg className="w-5 h-5">
                      <use href="#share"></use>
                    </svg>
                  </div>
                  <div className="bg-gray-100 text-zinc-500 w-[30px] h-[30px] flex-center rounded-full">
                    <svg className="w-5 h-5">
                      <use href="#heart"></use>
                    </svg>
                  </div>
                  <div className="bg-gray-100 text-zinc-500 w-[30px] h-[30px] flex-center rounded-full">
                    <svg className="w-5 h-5">
                      <use href="#right-left-arrow"></use>
                    </svg>
                  </div>
                  <div className="bg-gray-100 text-zinc-500 w-[30px] h-[30px] flex-center rounded-full">
                    <svg className="w-5 h-5">
                      <use href="#chart-bar"></use>
                    </svg>
                  </div>
                </div>
                <Swiper
                  className="mySwiper"
                  thumbs={{ swiper: activeTumb }}
                  modules={[Thumbs]}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={12}
                  slidesPerView={1}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                  }}
                >
                  <SwiperSlide>
                    <img
                      src="/images/product/laptop-4.jpg"
                      className="w-[230px] h-[230px] lg:w-[333px] lg:h-[333px] md:mx-auto"
                      alt="laptop-4"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/images/product/laptop-2.jpg"
                      className="w-[230px] h-[230px] lg:w-[333px] lg:h-[333px] md:mx-auto"
                      alt="laptop-4"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/images/product/laptop-3.jpg"
                      className="w-[230px] h-[230px] lg:w-[333px] lg:h-[333px] md:mx-auto"
                      alt="laptop-4"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/images/product/laptop-5.jpg"
                      className="w-[230px] h-[230px] lg:w-[333px] lg:h-[333px] md:mx-auto"
                      alt="laptop-4"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/images/product/laptop-1.jpg"
                      className="w-[230px] h-[230px] lg:w-[333px] lg:h-[333px] md:mx-auto"
                      alt="laptop-4"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="flex items-center justify-between gap-x-2 mt-3 max-w-[474px]">
                <Swiper
                  onSwiper={setActiveTumb}
                  className="mySwiper"
                  modules={[Thumbs]}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={12}
                  slidesPerView={5}
                  breakpoints={{
                    0: {
                      slidesPerView: 3,
                    },
                    474: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="border border-gray-200 w-[107px] rounded-md">
                      <img
                        src="/images/product/laptop-4.jpg"
                        className="w-[68px] mx-auto slide-image transition-all"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="border border-gray-200 w-[107px] rounded-md">
                      <img
                        src="/images/product/laptop-2.jpg"
                        className="w-[68px] mx-auto slide-image transition-all"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="border border-gray-200 w-[107px] rounded-md">
                      <img
                        src="/images/product/laptop-3.jpg"
                        className="w-[68px] mx-auto slide-image transition-all"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="border border-gray-200 w-[107px] rounded-md">
                      <img
                        src="/images/product/laptop-5.jpg"
                        className="w-[68px] mx-auto slide-image transition-all"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="border border-gray-200 w-[107px] rounded-md">
                      <img
                        src="/images/product/laptop-1.jpg"
                        className="w-[68px] mx-auto slide-image transition-all"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-span-2 pr-4">
              <div className="flex items-center justify-between border-b-2 border-gray-200 pb-[10px] flex-wrap pt-5 md:pt-0">
                <div className="flex flex-col gap-y-3">
                  <h3 className="font-DanaDemiBold text-base md:text-lg">
                    ساعت هوشمند سامسونگ مدل Galaxy Watch3 SM-R840 45mm بند چرمی
                  </h3>
                  <span className="text-gray-500 text-sm font-DanaMedium">
                    Samsung smart watch model Galaxy Watch3 SM-R840 45mm leather
                    strap
                  </span>
                </div>
                <img
                  src="/images/category/brand1-1.png"
                  className="w-[100px]"
                  alt="category"
                />
              </div>
              <div className="pt-5 flex justify-between flex-wrap gap-y-5">
                <div>
                  <h3 className="font-DanaDemiBold text-lg">ویژگی های کالا</h3>
                  <ul className="space-y-3 text-sm mt-3 font-DanaMedium">
                    <li className="flex items-center gap-x-1">
                      <span className="text-gray-500">نوع اتصال : </span>
                      <span>با سیم</span>
                    </li>
                    <li className="flex items-center gap-x-1">
                      <span className="text-gray-500">رابط ها:</span>
                      <span>3.5 میلیمتری</span>
                    </li>
                    <li className="flex items-center gap-x-1">
                      <span className="text-gray-500">مقدار رم :</span>
                      <span>8 گیگابایت</span>
                    </li>
                    <li className="flex items-center gap-x-1">
                      <span className="text-gray-500">نوع گوشی : </span>
                      <span>استریو 2 حالته</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-y-2 md:items-end">
                  <div className="flex items-center gap-x-2">
                    <span className="text-zinc-700 text-sm md:text-base">
                      16 دیدگاه
                    </span>
                    <span className="block w-[1.5px] h-5 bg-gray-200"></span>
                    <div className="flex gap-x-1">
                      <span className="text-sm md:text-base text-zinc-700">
                        (17) 4.5
                      </span>
                      <svg className="w-5 h-5 text-yellow-400">
                        <use href="#star"></use>
                      </svg>
                    </div>
                  </div>
                  <div className="flex  gap-x-2 mt-2">
                    <svg className="w-5 h-5 text-green-500">
                      <use href="#check"></use>
                    </svg>
                    <p className="font-DanaMedium text-sm md:text-base text-zinc-600">
                      گارانتی اصالت و سلامت فیزیکی کالا
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-5 space-y-4">
                <h3 className="font-DanaDemiBold text-base md:text-lg">
                  انتخاب رنگ : {colorChoose || "انتخاب کنید"}{" "}
                </h3>
                <div className="flex items-center flex-wrap gap-2 mt-2">
                  <div
                    className={`flex items-center gap-x-2 bg-gray-200 px-2 py-1 rounded-full cursor-default md:cursor-pointer ${
                      colorChoose === "مشکی" ? "border-2 border-blue-600" : ""
                    }`}
                    onClick={(e) => setColorChoose("مشکی")}
                  >
                    <div className="w-5 h-5 rounded-full bg-black flex-center">
                      {colorChoose === "مشکی" && (
                        <svg className="w-4 h-4 text-white">
                          <use href="#ok"></use>
                        </svg>
                      )}
                    </div>
                    <span>مشکی</span>
                  </div>
                  <div
                    className={`flex items-center gap-x-2 bg-gray-200 px-2 py-1 rounded-full cursor-default md:cursor-pointer ${
                      colorChoose === "آبی" ? "border-2 border-blue-600" : ""
                    }`}
                    onClick={(e) => setColorChoose("آبی")}
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex-center">
                      {colorChoose === "آبی" && (
                        <svg className="w-4 h-4 text-white">
                          <use href="#ok"></use>
                        </svg>
                      )}
                    </div>
                    <span>آبی</span>
                  </div>
                  <div
                    className={`flex items-center gap-x-2 bg-gray-200 px-2 py-1 rounded-full cursor-default md:cursor-pointer ${
                      colorChoose === "قرمز" ? "border-2 border-blue-600" : ""
                    }`}
                    onClick={(e) => setColorChoose("قرمز")}
                  >
                    <div className="w-5 h-5 rounded-full bg-red-500 flex-center">
                      {colorChoose === "قرمز" && (
                        <svg className="w-4 h-4 text-white">
                          <use href="#ok"></use>
                        </svg>
                      )}
                    </div>
                    <span>قرمز</span>
                  </div>
                  <div
                    className={`flex items-center gap-x-2 bg-gray-200 px-2 py-1 rounded-full cursor-default md:cursor-pointer ${
                      colorChoose === "زرد" ? "border-2 border-blue-600" : ""
                    }`}
                    onClick={(e) => setColorChoose("زرد")}
                  >
                    <div className="w-5 h-5 rounded-full bg-yellow-400 flex-center">
                      {colorChoose === "زرد" && (
                        <svg className="w-4 h-4 text-white">
                          <use href="#ok"></use>
                        </svg>
                      )}
                    </div>
                    <span>زرد</span>
                  </div>
                </div>
              </div>
              <p className="my-3 text-sm font-DanaDemiBold text-blue-600">
                14 عدد در انبار
              </p>
              <div className="px-2.5 py-4 bg-gray-100 rounded-md shadow flex flex-col md:flex-row items-center gap-y-5 justify-between">
                <div>
                  <div className="flex items-center gap-x-4">
                    <span className="text-gray-400 font-DanaDemiBold line-through">
                      1,500,000 تومان
                    </span>
                    <span className="block w-[1.5px] h-6 bg-gray-400"></span>
                    <span className="text-blue-600 font-DanaDemiBold">
                      1,200,000 تومان
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-x-5">
                  <button className="flex items-center gap-x-1 bg-blue-600 text-white px-6 py-2 rounded-md shadow-blue">
                    <svg className="w-6 h-6">
                      <use href="#shop-bag"></use>
                    </svg>
                    خرید کالا
                  </button>
                  <div className="flex items-center gap-x-2">
                    <div className="w-10 h-[30px] bg-blue-600 text-white flex-center rounded-r-full font-DanaMedium shadow-blue cursor-default md:cursor-pointer">
                      <span className="mt-1">+</span>
                    </div>
                    <div className="bg-white w-[50px] h-[30px] flex-center font-DanaDemiBold rounded-md shadow">
                      1
                    </div>
                    <div className="w-10 h-[30px] bg-blue-600 text-white flex-center rounded-l-full font-DanaMedium shadow-blue cursor-default md:cursor-pointer">
                      <span className="mt-1">-</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* other shop */}
        <div className="py-5 px-3 bg-white text-lg  shadow rounded-md">
          <div className="overflow-x-auto table-container">
            <h3 className="font-DanaDemiBold text-base md:text-lg">
              سایر فروشندگان موجود
            </h3>
            <div className="h-0.5 bg-gray-200 my-2 relative">
              <div className="absolute inset-0 bg-blue-600 w-1/12"></div>
            </div>
            <table className="w-full text-[16px] mt-5 divide-y-[1.5px] divide-gray-300">
              <Shoper/>
              <Shoper/>
              <Shoper/>
              <Shoper/>
            </table>
          </div>
        </div>
        {/* about product */}
        <div className="flex  mt-5">
          <div className="bg-white rounded-md shadow md:ml-5   w-full py-5 px-4">
            <div className="flex items-center gap-x-6 border-b-[1.5px] border-b-gray-200 child:pb-4 child:cursor-pointer font-DanaMedium">
              <div
                className={`text-xs font-DanaDemiBold md:text-base${
                  optionShowModel === "توضیحات کالا"
                    ? "text-blue-600 border-b-2 border-b-blue-600 text-xs font-DanaDemiBold md:text-base"
                    : ""
                }`}
                onClick={(e) => setOptionShowModel(e.target.innerHTML)}
              >
                توضیحات کالا
              </div>
              <div
                onClick={(e) => setOptionShowModel(e.target.innerHTML)}
                className={`text-xs font-DanaDemiBold md:text-base${
                  optionShowModel === "مشخصات کالا"
                    ? "text-blue-600 border-b-2 border-b-blue-600 text-xs font-DanaDemiBold md:text-base"
                    : ""
                }`}
              >
                مشخصات کالا
              </div>
              <div
                onClick={(e) => setOptionShowModel(e.target.innerHTML)}
                className={`text-xs font-DanaDemiBold md:text-base${
                  optionShowModel === "توضیحات تکمیلی"
                    ? "text-blue-600 border-b-2 border-b-blue-600 text-xs font-DanaDemiBold md:text-base"
                    : ""
                }`}
              >
                توضیحات تکمیلی
              </div>
              <div
                onClick={(e) => setOptionShowModel(e.target.innerHTML)}
                className={`text-xs font-DanaDemiBold md:text-base${
                  optionShowModel === "نظرات"
                    ? "text-blue-600 border-b-2 border-b-blue-600 text-xs font-DanaDemiBold md:text-base"
                    : ""
                }`}
              >
                نظرات
              </div>
            </div>
            {/* start main section */}
            <div className="py-5 px-2 md:px-4">
              {optionShowModel === "توضیحات کالا" && (
                <div>
                  <h3 className="font-DanaDemiBold text-base md:text-2xl">
                    معرفی محصول
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
                    <div>
                      <p className="text-gray-500 text-sm/[28px] md:text-base/[32px]">
                        اگر به دنبال تهیه یک هدفون بی‌سیم گیمینگ هستید، هدفون
                        بلوتوثی مدل K55 به‌عنوان یکی از جدیدترین گزینه‌های موجود
                        در بازار ارزش بررسی را دارد. این مدل با ابعادی کوچک
                        تولید شده است. ابعاد و وزن کم آن، جابه‌جایی این وسیله و
                        استفاده طولانی‌مدت از آن را آسان می‌کند و باعث خستگی
                        گوش‌ها نخواهد شد. این مدل برای اتصال به دستگاه‌ به
                        بلوتوث نسخه 5.0 مجهز شده است و در مدت زمان اندکی، اتصال
                        با گوشی موبایل اندروید یا ios شما برقرار خواهد شد. هدفون
                        بی سیم K55 دارای یک میکروفون با کیفیت است و ... اگر به
                        دنبال تهیه یک هدفون بی‌سیم گیمینگ هستید، هدفون بلوتوثی
                        مدل K55 به‌عنوان یکی از جدیدترین گزینه‌های موجود در
                        بازار ارزش بررسی را دارد.اگر به دنبال تهیه یک هدفون
                        بی‌سیم گیمینگ هستید، هدفون بلوتوثی مدل K55 به‌عنوان یکی
                        از جدیدترین گزینه‌های موجود در بازار ارزش بررسی را دارد.
                      </p>
                    </div>
                    <div>
                      <img
                        src="/images/product/laptop-4.jpg"
                        alt="laptop-4.jpg"
                        className="w-[290px] mx-auto"
                      />
                    </div>
                  </div>
                </div>
              )}
              {optionShowModel === "مشخصات کالا" && (
                <div>
                  <h3 className="font-DanaDemiBold text-base md:text-2xl">
                    طراحی و کیفیت ساخت گوشی شیائومی ردمی 9A
                  </h3>
                  <div>
                    <p className="text-gray-500 text-sm/[28px] md:text-base/[32px] mt-4">
                      به عنوان گوشی‌ای که قیمت خیلی زیادی ندارد، باید به این
                      موضوع اشاره کنیم که داخل بسته بندی Redmi 9A آیتم‌های خاصی
                      دیده نمی شود. دفترچه راهنما، ابزار خارج کردن سیم کارت و
                      شارژ ۱۰ واتی را به همراه کابل USB مشاهده می‌کنید. این گوشی
                      شیائومی در ابعاد ۱۶۴.۹ در ۷۷.۱ در ۹ میلی متر ساخته شده و
                      وزن آن هم ۱۹۶ گرم است. در حال کلی باید به این موضوع اشاره
                      کنیم که این گوشی خیلی خوب در دست قرار میگیرد. قاب این گوشی
                      بافت جالب توجهی دارد و به همین دلیل خیلی خوب داخل دست قرار
                      میگیرد. البته باید به این موضوع اشاره کنیم که قاب پشتی
                      گوشی خیلی زود اثر انگشت را به خود جلب می‌کند. قاب پشتی که
                      به صورت مات طراحی شده میزبان دوربین‌های پشت است و به جز
                      دوربین‌ها چیزی روی آن قرار نگرفته است. به همین دلیل گوشی
                      بسیار ساده به نظر می‌رسد. زمانی که به گوشی نگاه می‌کنید،
                      متوجه می‌شوید که صفحه نمایش آن حاشیه‌های بسبتا بزرگی دارد.
                      البته که با توجه به قیمت ارزان این گوشی نیاید انتظار زیادی
                      از این محصول داشته باشید. روی صفحه نمایش ناچ قطره‌ ای قرار
                      گرفته که داخل آن دوربین سلفی دیده می‌شود. روی لبه بالای
                      گوشی جک ۳.۵ میلی صدا قرار گرفته و روی لبه پایین هم پورت
                      micro-USB و اسپیکر گوشی و میکروفن را مشاهده می‌کنید. خیلی
                      دوست داشتیم که روی این گوشی پورت USB C مشاهده می کردیم.
                      روی لبه سمت چپ گوشی محل قرار گرفتن سیم کارت و کارت حافظه
                      را مشاهده می‌کنید. همچنین باید به این موضوع اشاره کنیم که
                      این گوشی در سه رنگ آبی و سبز و مشکی راهی بازار شده است.
                    </p>
                    <img
                      src="/images/image.jpg"
                      alt="image.jpg"
                      className="mx-auto mt-8 rounded-md shadow overflow-hidden"
                    />
                  </div>
                </div>
              )}
              {optionShowModel === "توضیحات تکمیلی" && (
                <div>
                  <h3 className="font-DanaDemiBold text-base md:text-2xl">
                    مشخصات فنی
                  </h3>
                  <div className="mt-6 flex flex-col gap-y-12">
                    <div>
                      <h4 className="flex  gap-x-2 font-DanaDemiBold">
                        <svg className="w-5 h-5">
                          <use href="#page"></use>
                        </svg>
                        مشخصات کلی
                      </h4>
                      <ul className="features font-DanaMedium space-y-5 mt-5">
                        <li className="flex items-center gap-x-2 pr-4 border-r-2 border-r-gray-200">
                          <span className="py-2 text-gray-500 w-[180px]">
                            قابلیت پخش موسیقی
                          </span>
                          <span className="block bg-gray-200 w-full py-[18px] px-[14px] rounded-lg text-gray-500">
                            دارد
                          </span>
                        </li>
                        <li className="flex items-center gap-x-2 pr-4 border-r-2 border-r-gray-200">
                          <span className="py-2 text-gray-500 w-[180px]">
                            قابلیت پخش موسیقی
                          </span>
                          <span className="block bg-gray-200 w-full py-[18px] px-[14px] rounded-lg text-gray-500">
                            دارد
                          </span>
                        </li>
                        <li className="flex items-center gap-x-2 pr-4 border-r-2 border-r-gray-200">
                          <span className="py-2 text-gray-500 w-[180px]">
                            قابلیت پخش موسیقی
                          </span>
                          <span className="block bg-gray-200 w-full py-[18px] px-[14px] rounded-lg text-gray-500">
                            دارد
                          </span>
                        </li>
                        <li className="flex items-center gap-x-2 pr-4 border-r-2 border-r-gray-200">
                          <span className="py-2 text-gray-500 w-[180px]">
                            قابلیت پخش موسیقی
                          </span>
                          <span className="block bg-gray-200 w-full py-[18px] px-[14px] rounded-lg text-gray-500">
                            دارد
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="flex  gap-x-2 font-DanaDemiBold">
                        <svg className="w-5 h-5">
                          <use href="#page"></use>
                        </svg>
                        مشخصات کلی
                      </h4>
                      <ul className="features font-DanaMedium space-y-5 mt-5">
                        <li className="flex items-center gap-x-2 pr-4 border-r-2 border-r-gray-200">
                          <span className="py-2 text-gray-500 w-[180px]">
                            قابلیت پخش موسیقی
                          </span>
                          <span className="block bg-gray-200 w-full py-[18px] px-[14px] rounded-lg text-gray-500">
                            دارد
                          </span>
                        </li>
                        <li className="flex items-center gap-x-2 pr-4 border-r-2 border-r-gray-200">
                          <span className="py-2 text-gray-500 w-[180px]">
                            قابلیت پخش موسیقی
                          </span>
                          <span className="block bg-gray-200 w-full py-[18px] px-[14px] rounded-lg text-gray-500">
                            دارد
                          </span>
                        </li>
                        <li className="flex items-center gap-x-2 pr-4 border-r-2 border-r-gray-200">
                          <span className="py-2 text-gray-500 w-[180px]">
                            قابلیت پخش موسیقی
                          </span>
                          <span className="block bg-gray-200 w-full py-[18px] px-[14px] rounded-lg text-gray-500">
                            دارد
                          </span>
                        </li>
                        <li className="flex items-center gap-x-2 pr-4 border-r-2 border-r-gray-200">
                          <span className="py-2 text-gray-500 w-[180px]">
                            قابلیت پخش موسیقی
                          </span>
                          <span className="block bg-gray-200 w-full py-[18px] px-[14px] rounded-lg text-gray-500">
                            دارد
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              {optionShowModel === "نظرات" && (
                <div>
                  <select className="bg-gray-100 w-full outline-none border-none py-1 rounded-sm mb-5">
                    <option value={5}>امتیاز خود را انتخاب کنید</option>
                    <option value={5}>عالی</option>
                    <option value={4}>خیلی خوب</option>
                    <option value={3}> خوب</option>
                    <option value={2}>قابل قبول</option>
                    <option value={1}>ضعیف</option>
                  </select>
                  <textarea
                    className="bg-gray-100 outline-none w-full h-56 p-4 focus:border focus:border-blue-600 transition-all rounded-md"
                    placeholder="نظر خود را وارد کنید..."
                  ></textarea>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 mt-3 gap-y-4">
                    <div>
                      <label
                        htmlFor="proves"
                        className="text-green-500 font-DanaDemiBold "
                      >
                        نقاط قوت
                      </label>
                      <div className="bg-gray-100 transition-all flex-wrap  focus:border focus:border-green-500 rounded-md mt-1 flex items-center  px-2 py-0.5">
                        <div className="flex items-center flex-wrap gap-2">
                          {proves.map((prove) => (
                            <div className="flex items-center gap-x-1 bg-green-300 text-green-700 p-1 rounded-md">
                              {prove.title}
                              <svg
                                className="w-4 h-4"
                                onClick={() => deleteProves(prove.id)}
                              >
                                <use href="#x-mark"></use>
                              </svg>
                            </div>
                          ))}
                        </div>
                        <input
                          id="proves"
                          type="text"
                          placeholder="با کلید اینتر اضافه کنید ..."
                          className="outline-none px-3 h-10 md:h-14 rounded-md  bg-gray-100"
                          onKeyDown={(e) => addProves(e)}
                          onChange={(e) => setProveText(e.target.value)}
                          value={proveText}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="cons"
                        className="text-red-500 font-DanaDemiBold "
                      >
                        نقاط ضعف
                      </label>
                      <div className="bg-gray-100 transition-all flex-wrap  focus:border focus:border-green-500 rounded-md mt-1 flex items-center flex-wrap  px-2 py-0.5">
                        <div className="flex items-center flex-wrap gap-2">
                          {cons.map((con) => (
                            <div className="flex items-center gap-x-1 bg-red-300 text-red-700 p-1 rounded-md">
                              {con.title}
                              <svg
                                className="w-4 h-4"
                                onClick={() => deleteCons(con.id)}
                              >
                                <use href="#x-mark"></use>
                              </svg>
                            </div>
                          ))}
                        </div>
                        <input
                          id="cons"
                          type="text"
                          placeholder="با کلید اینتر اضافه کنید ..."
                          className=" outline-none px-3 h-10 md:h-14 rounded-md  bg-gray-100"
                          onKeyDown={(e) => addCons(e)}
                          onChange={(e) => setConsText(e.target.value)}
                          value={consText}
                        />
                      </div>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white p-2 px-6 rounded-md shadow-blue mt-5">
                    ثبت کامنت
                  </button>
                  {/* show user comments */}
                  <div>
                    <div className="border border-gray-200 rounded-md p-4 mt-10 shadow">
                      <div>
                        <div className="bg-[#eee] p-2.5 rounded-lg shadow flex items-center justify-between flex-wrap">
                          <div className="flex items-center gap-x-3">
                            <div className="flex-center bg-white rounded-full w-[60px] h-[60px] shadow">
                              <img
                                src="/images/user.png"
                                alt="user-image"
                                className="w-[50px] h-[50px] rounded-full"
                              />
                            </div>
                            <div className="flex items-center gap-x-2.5 font-DanaDemiBold">
                              <span className="text-sm md:text-base">
                                میلاد سلامیان
                              </span>
                              <span className="text-sm md:text-base">
                                1402/05/08
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-x-0.5 flex-row-reverse grow">
                            <svg className="w-5 md:w-6 h-5 md:h-6 text-gray-400">
                              <use href="#star"></use>
                            </svg>
                            <svg className="w-5 md:w-6 h-5 md:h-6 text-gray-400">
                              <use href="#star"></use>
                            </svg>
                            <svg className="w-5 md:w-6 h-5 md:h-6 text-yellow-400">
                              <use href="#star"></use>
                            </svg>
                            <svg className="w-5 md:w-6 h-5 md:h-6 text-yellow-400">
                              <use href="#star"></use>
                            </svg>
                            <svg className="w-5 md:w-6 h-5 md:h-6 text-yellow-400">
                              <use href="#star"></use>
                            </svg>
                          </div>
                        </div>
                        <p className="mt-4 text-gray-600 text-sm/[28px] md:text-base/[32px]">
                          بنده این گوشی را خریداری کردم و کاملا راضی هشتم و
                          بهترین گارانتی را دارد و پلپ بود و حتما به شما هم
                          پیشنهاد می نمایم که چنانچه قصد خرید این کالا را دارید
                          از دیجی کالا تهیه نمایید ؛پارت نامبر من هم سنگاپور بود
                          که بهترین پارت نامبر در بازار است و هیچ محدودیتی
                          ندارد.
                        </p>
                        <div className="text-sm mt-4">
                          <ul className="space-y-3 font-DanaDemiBold text-gray-700">
                            <li className="flex items-center gap-x-1">
                              <svg className="w-4 md:w-5 h-5 md:h-5 text-green-600">
                                <use href="#plus"></use>
                              </svg>
                              <span>جنس بدنه</span>
                            </li>
                            <li className="flex items-center gap-x-1">
                              <svg className="w-4 md:w-5 h-5 md:h-5 text-green-600">
                                <use href="#plus"></use>
                              </svg>
                              <span>کیفیت تصویر</span>
                            </li>
                            <li className="flex items-center gap-x-1">
                              <svg className="w-4 md:w-5 h-5 md:h-5 text-green-600">
                                <use href="#plus"></use>
                              </svg>
                              <span>شارژ باطری</span>
                            </li>
                          </ul>
                          <ul className="space-y-3 font-DanaDemiBold text-gray-700 mt-5">
                            <li className="flex items-center gap-x-1">
                              <svg className="w-4 md:w-5 h-5 md:h-5 text-red-600">
                                <use href="#minus"></use>
                              </svg>
                              <span>جنس بدنه</span>
                            </li>
                            <li className="flex items-center gap-x-1">
                              <svg className="w-4 md:w-5 h-5 md:h-5 text-red-600">
                                <use href="#minus"></use>
                              </svg>
                              <span>کیفیت تصویر</span>
                            </li>
                            <li className="flex items-center gap-x-1">
                              <svg className="w-4 md:w-5 h-5 md:h-5 text-red-600">
                                <use href="#minus"></use>
                              </svg>
                              <span>شارژ باطری</span>
                            </li>
                          </ul>
                        </div>
                        <button className="bg-[#FFA41B] text-white px-5 py-1 rounded-md shadow-yellow mt-5">
                          پاسخ
                        </button>
                      </div>
                    </div>
                    <div className="border border-gray-200 rounded-md p-4 mt-10 shadow">
                      <div>
                        <div className="bg-[#eee] p-2.5 rounded-lg shadow flex items-center justify-between flex-wrap">
                          <div className="flex items-center gap-x-3">
                            <div className="flex-center bg-white rounded-full w-[60px] h-[60px] shadow">
                              <img
                                src="/images/user.png"
                                alt="user-image"
                                className="w-[50px] h-[50px] rounded-full"
                              />
                            </div>
                            <div className="flex items-center gap-x-2.5 font-DanaDemiBold">
                              <span className="text-sm md:text-base">
                                میلاد سلامیان
                              </span>
                              <span className="text-sm md:text-base">
                                1402/05/08
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-x-0.5 flex-row-reverse grow">
                            <svg className="w-5 md:w-6 h-5 md:h-6 text-gray-400">
                              <use href="#star"></use>
                            </svg>
                            <svg className="w-5 md:w-6 h-5 md:h-6 text-gray-400">
                              <use href="#star"></use>
                            </svg>
                            <svg className="w-5 md:w-6 h-5 md:h-6 text-yellow-400">
                              <use href="#star"></use>
                            </svg>
                            <svg className="w-5 md:w-6 h-5 md:h-6 text-yellow-400">
                              <use href="#star"></use>
                            </svg>
                            <svg className="w-5 md:w-6 h-5 md:h-6 text-yellow-400">
                              <use href="#star"></use>
                            </svg>
                          </div>
                        </div>
                        <p className="mt-4 text-gray-600 text-sm/[28px] md:text-base/[32px]">
                          بنده این گوشی را خریداری کردم و کاملا راضی هشتم و
                          بهترین گارانتی را دارد و پلپ بود و حتما به شما هم
                          پیشنهاد می نمایم که چنانچه قصد خرید این کالا را دارید
                          از دیجی کالا تهیه نمایید ؛پارت نامبر من هم سنگاپور بود
                          که بهترین پارت نامبر در بازار است و هیچ محدودیتی
                          ندارد.
                        </p>
                        <div className="text-sm mt-4">
                          <ul className="space-y-3 font-DanaDemiBold text-gray-700">
                            <li className="flex items-center gap-x-1">
                              <svg className="w-4 md:w-5 h-5 md:h-5 text-green-600">
                                <use href="#plus"></use>
                              </svg>
                              <span>جنس بدنه</span>
                            </li>
                            <li className="flex items-center gap-x-1">
                              <svg className="w-4 md:w-5 h-5 md:h-5 text-green-600">
                                <use href="#plus"></use>
                              </svg>
                              <span>کیفیت تصویر</span>
                            </li>
                            <li className="flex items-center gap-x-1">
                              <svg className="w-4 md:w-5 h-5 md:h-5 text-green-600">
                                <use href="#plus"></use>
                              </svg>
                              <span>شارژ باطری</span>
                            </li>
                          </ul>
                          <ul className="space-y-3 font-DanaDemiBold text-gray-700 mt-5">
                            <li className="flex items-center gap-x-1">
                              <svg className="w-4 md:w-5 h-5 md:h-5 text-red-600">
                                <use href="#minus"></use>
                              </svg>
                              <span>جنس بدنه</span>
                            </li>
                            <li className="flex items-center gap-x-1">
                              <svg className="w-4 md:w-5 h-5 md:h-5 text-red-600">
                                <use href="#minus"></use>
                              </svg>
                              <span>کیفیت تصویر</span>
                            </li>
                            <li className="flex items-center gap-x-1">
                              <svg className="w-4 md:w-5 h-5 md:h-5 text-red-600">
                                <use href="#minus"></use>
                              </svg>
                              <span>شارژ باطری</span>
                            </li>
                          </ul>
                        </div>
                        <button className="bg-[#FFA41B] text-white px-5 py-1 rounded-md shadow-yellow mt-5">
                          پاسخ
                        </button>
                        {/* start comment answer */}
                        <div className="border border-gray-200 bg-[#ffa41b31] rounded-md p-4 mt-10 shadow">
                          <div className="bg-white p-2.5 rounded-lg shadow flex items-center justify-between flex-wrap">
                            <div className="flex items-center gap-x-3">
                              <div className="flex-center bg-gray-200 rounded-full w-[60px] h-[60px] shadow">
                                <img
                                  src="/images/user.png"
                                  alt="user-image"
                                  className="w-[50px] h-[50px] rounded-full"
                                />
                              </div>
                              <div className="flex items-center gap-x-2.5 font-DanaDemiBold">
                                <span className="text-sm md:text-base">
                                  میلاد سلامیان
                                </span>
                                <span className="text-sm md:text-base">
                                  1402/05/08
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-x-0.5 flex-row-reverse grow">
                              <svg className="w-5 md:w-6 h-5 md:h-6 text-gray-400">
                                <use href="#star"></use>
                              </svg>
                              <svg className="w-5 md:w-6 h-5 md:h-6 text-gray-400">
                                <use href="#star"></use>
                              </svg>
                              <svg className="w-5 md:w-6 h-5 md:h-6 text-yellow-400">
                                <use href="#star"></use>
                              </svg>
                              <svg className="w-5 md:w-6 h-5 md:h-6 text-yellow-400">
                                <use href="#star"></use>
                              </svg>
                              <svg className="w-5 md:w-6 h-5 md:h-6 text-yellow-400">
                                <use href="#star"></use>
                              </svg>
                            </div>
                          </div>
                          <p className="mt-4 text-gray-600 text-sm/[28px] md:text-base/[32px]">
                            بنده این گوشی را خریداری کردم و کاملا راضی هشتم و
                            بهترین گارانتی را دارد و پلپ بود و حتما به شما هم
                            پیشنهاد می نمایم که چنانچه قصد خرید این کالا را
                            دارید از دیجی کالا تهیه نمایید ؛پارت نامبر من هم
                            سنگاپور بود که بهترین پارت نامبر در بازار است و هیچ
                            محدودیتی ندارد.
                          </p>
                          <div className="text-sm mt-4">
                            <ul className="space-y-3 font-DanaDemiBold text-gray-700">
                              <li className="flex items-center gap-x-1">
                                <svg className="w-4 md:w-5 h-5 md:h-5 text-green-600">
                                  <use href="#plus"></use>
                                </svg>
                                <span>جنس بدنه</span>
                              </li>
                              <li className="flex items-center gap-x-1">
                                <svg className="w-4 md:w-5 h-5 md:h-5 text-green-600">
                                  <use href="#plus"></use>
                                </svg>
                                <span>کیفیت تصویر</span>
                              </li>
                              <li className="flex items-center gap-x-1">
                                <svg className="w-4 md:w-5 h-5 md:h-5 text-green-600">
                                  <use href="#plus"></use>
                                </svg>
                                <span>شارژ باطری</span>
                              </li>
                            </ul>
                            <ul className="space-y-3 font-DanaDemiBold text-gray-700 mt-5">
                              <li className="flex items-center gap-x-1">
                                <svg className="w-4 md:w-5 h-5 md:h-5 text-red-600">
                                  <use href="#minus"></use>
                                </svg>
                                <span>جنس بدنه</span>
                              </li>
                              <li className="flex items-center gap-x-1">
                                <svg className="w-4 md:w-5 h-5 md:h-5 text-red-600">
                                  <use href="#minus"></use>
                                </svg>
                                <span>کیفیت تصویر</span>
                              </li>
                              <li className="flex items-center gap-x-1">
                                <svg className="w-4 md:w-5 h-5 md:h-5 text-red-600">
                                  <use href="#minus"></use>
                                </svg>
                                <span>شارژ باطری</span>
                              </li>
                            </ul>
                          </div>
                          <button className="bg-[#FFA41B] text-white px-5 py-1 rounded-md shadow-yellow mt-5">
                            پاسخ
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="bg-white rounded-md shadow h-[500px]  w-[450px] hidden lg:block sticky top-0 px-4 py-3">
            {/* start header of box */}
            <div className="flex items-center justify-between">
              <div>
                <img
                  src="/images/product/laptop-4.jpg"
                  alt="laptop 4"
                  className="w-[90px] shrink-0"
                />
              </div>
              <p className="w-[204px] font-DanaDemiBold">
                ساعت هوشمند سامسونگ مدل Galaxy Watch3 SM-R840 45mm بند چرمی
              </p>
            </div>
            <div class="flex items-center flex-wrap gap-x-2 mt-4">
              <div class="flex items-center gap-x-2 bg-gray-200 px-2 py-1 rounded-full cursor-default md:cursor-pointer">
                <div class="w-5 h-5 rounded-full bg-black"></div>
                <span>مشکی</span>
              </div>
              <div class="flex items-center gap-x-2 bg-gray-200 px-2 py-1 rounded-full cursor-default md:cursor-pointer">
                <div class="w-5 h-5 rounded-full bg-blue-600"></div>
                <span>آبی</span>
              </div>
              <div class="flex items-center gap-x-2 bg-gray-200 px-2 py-1 rounded-full cursor-default md:cursor-pointer">
                <div class="w-5 h-5 rounded-full bg-red-500"></div>
                <span>قرمز</span>
              </div>
              <div class="flex items-center gap-x-2 bg-gray-200 px-2 py-1 rounded-full cursor-default md:cursor-pointer">
                <div class="w-5 h-5 rounded-full bg-yellow-400"></div>
                <span>زرد</span>
              </div>
            </div>
            <div className="flex items-center gap-x-2 my-4">
              <img
                src="/images/category/brand1-1.png"
                class="w-[100px]"
                alt="category"
              />
              <p>شیائومی</p>
            </div>
            <div class="flex items-center gap-x-2 text-sm my-4">
              <span class="text-zinc-700 text-sm ">16 دیدگاه</span>
              <span class="block w-[1.5px] h-5 bg-gray-200"></span>
              <div class="flex gap-x-1">
                <span class="text-sm  text-zinc-700">(17) 4.5</span>
                <svg class="w-5 h-5 text-yellow-400">
                  <use href="#star"></use>
                </svg>
              </div>
            </div>
            <div class="flex  gap-x-2 my-6">
              <svg class="w-5 h-5 text-green-500">
                <use href="#check"></use>
              </svg>
              <p class="font-DanaMedium text-zinc-600">
                گارانتی اصالت و سلامت فیزیکی کالا
              </p>
            </div>
            <div class="flex items-center justify-between my-4">
              <span class="text-gray-400 font-DanaDemiBold text-lg line-through">
                1,500,000 تومان
              </span>
              <span class="block w-[1.5px] h-6 bg-gray-400"></span>
              <span class="text-blue-600 text-lg font-DanaDemiBold">
                1,200,000 تومان
              </span>
            </div>
            <div className="flex items-center justify-center my-6">
              <div class="flex items-center gap-x-2">
                <div
                  class="w-10 h-[30px] select-none bg-blue-600 text-white flex-center rounded-r-full font-DanaMedium shadow-blue cursor-default md:cursor-pointer"
                  onClick={() => setProductCount((prevCount) => prevCount + 1)}
                >
                  <span class="mt-1 select-none">+</span>
                </div>
                <div class="bg-white w-[50px] h-[30px] flex-center font-DanaDemiBold rounded-md shadow">
                  {productCount}
                </div>
                <div
                  class="w-10 h-[30px] select-none bg-blue-600 text-white flex-center rounded-l-full font-DanaMedium shadow-blue cursor-default md:cursor-pointer"
                  onClick={() => {
                    if (productCount !== 1) {
                      setProductCount((prevCount) => prevCount - 1);
                    }
                  }}
                >
                  <span class="mt-1 select-none">-</span>
                </div>
              </div>
            </div>
            <button class="flex items-center justify-center w-full gap-x-1 bg-blue-600 text-white px-6 py-2 rounded-md shadow-blue">
              <svg class="w-6 h-6">
                <use href="#shop-bag"></use>
              </svg>
              خرید کالا
            </button>
          </div>
        </div>
      </div>
      {/* same product releated to this product */}
      <SameProduct />
      <Footer />
      <FooterMenu />
    </div>
  );
}

export default ProductPage;
