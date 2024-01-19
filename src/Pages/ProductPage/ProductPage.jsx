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
import Comments from "../../Components/Comments/Comments";
import FeatureList from "../../Components/FeatureList/FeatureList";
import ProductBoxInfo from "../../Components/ProductBoxInfo/ProductBoxInfo";
import ColorBox from "../../Components/ColorBox/ColorBox";
import SliderIcon from "../../Components/SliderIcon/SliderIcon";

function ProductPage() {
  const [optionShowModel, setOptionShowModel] = useState("توضیحات کالا");
  const [productCount, setProductCount] = useState(1);
  const [colorChoose, setColorChoose] = useState("");
  const [activeTumb, setActiveTumb] = useState(null);

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
                  <SliderIcon icon={'share'}/>
                  <SliderIcon icon={'heart'}/>
                  <SliderIcon icon={'right-left-arrow'}/>
                  <SliderIcon icon={'chart-bar'}/>
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
                  <ColorBox
                    colorCode={"blue"}
                    colorName={"آبی"}
                    colorChoose={colorChoose}
                    setColorChoose={setColorChoose}
                  />
                  <ColorBox
                    colorCode={"red"}
                    colorName={"قرمز"}
                    colorChoose={colorChoose}
                    setColorChoose={setColorChoose}
                  />
                  <ColorBox
                    colorCode={"green"}
                    colorName={"سبز"}
                    colorChoose={colorChoose}
                    setColorChoose={setColorChoose}
                  />
                  <ColorBox
                    colorCode={"yellow"}
                    colorName={"زرد"}
                    colorChoose={colorChoose}
                    setColorChoose={setColorChoose}
                  />
                  <ColorBox
                    colorCode={"black"}
                    colorName={"مشکی"}
                    colorChoose={colorChoose}
                    setColorChoose={setColorChoose}
                  />
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
              <Shoper />
              <Shoper />
              <Shoper />
              <Shoper />
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
                  <FeatureList />
                </div>
              )}
              {optionShowModel === "نظرات" && (
                <div>
                  <Comments />
                </div>
              )}
            </div>
          </div>
          <ProductBoxInfo
            productCount={productCount}
            setProductCount={setProductCount}
            setColorChoose={setColorChoose}
            colorChoose={colorChoose}
          />
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
