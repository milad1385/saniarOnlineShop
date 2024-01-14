import React, { useState } from "react";
import TitleCat from "../TitleCat/TitleCat";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay , Navigation } from "swiper/modules";
import ProductBox from "../ProductBox/ProductBox";
function MoreSell() {
  const [swipe, setSwipe] = useState(null);
  return (
    <div className="">
      <div className="container">
        <TitleCat main={"محصولات"} desc={"پرفروش"} />
      </div>
      <div className="parent-2 relative mt-5">
        <div className="container main relative">
          <Swiper
            onBeforeInit={(swipper) => setSwipe(swipper)}
            modules={[Pagination, Autoplay , Navigation]}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            slidesPerView={5}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              568: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
              1400: {
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide>
              <ProductBox image={"product-image3.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox image={"product-image4.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox image={"product-image6.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox image={"television2.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox image={"product-image1.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox image={"wach3.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox image={"wach1.jpg"} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex items-center justify-center relative mt-7 gap-x-2.5">
          <div
            className="bg-white prev flex items-center justify-center rounded-md w-10 h-11 shadow-sm md:cursor-pointer"
            onClick={() => swipe?.slidePrev()}
          >
            <svg className="w-6 h-6 rotate-180  ">
              <use href="#chevron-left"></use>
            </svg>
          </div>
          <div
            className="bg-white next  flex items-center justify-center rounded-md w-10 h-11 shadow-sm md:cursor-pointer"
            onClick={() => swipe?.slideNext()}
          >
            <svg className="w-6 h-6 chev">
              <use href="#chevron-left"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreSell;
