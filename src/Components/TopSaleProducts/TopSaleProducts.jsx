import React, { useState } from "react";
import TitleCat from "../TitleCat/TitleCat";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import ProductBox from "../ProductBox/ProductBox";
import useGetBestSeller from "../../Hooks/AdminPanel/Product/useGetBestSeller";

function TopSaleProducts() {
  const [swipe, setSwipe] = useState(null);

  const { data: bestSeller, isLoading } = useGetBestSeller();
  return (
    <div className="">
      <div className="container">
        <TitleCat main={"محصولات"} desc={"پر طرفدار"} />
      </div>
      <div className="parent relative mt-5">
        <div className="container main relative">
          <Swiper
            onBeforeInit={(swipper) => setSwipe(swipper)}
            modules={[Pagination, Autoplay, Navigation]}
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
                slidesPerView: 2,
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
            {bestSeller?.map((product) => (
              <SwiperSlide key={product._id}>
                <ProductBox product={product} />
              </SwiperSlide>
            ))}
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

export default TopSaleProducts;
