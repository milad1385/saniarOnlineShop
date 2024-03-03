import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import ArticleBox from "../ArticleBox/ArticleBox";
import useGetWithOutPagination from "../../Hooks/AdminPanel/article/useGetWithOutPagination";

function LastBlog({ isBlog }) {
  const [swipe, setSwipe] = useState(null);
  const { data: articles, isLoading } = useGetWithOutPagination();
  return (
    <div className={`${isBlog ? "py-2" : "py-10"}`}>
      <div className="blog relative">
        <div className="container">
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
            {articles?.map((article) => (
              <SwiperSlide>
                <ArticleBox article={article} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex items-center justify-center relative mt-12 gap-x-2.5">
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
export default LastBlog;
