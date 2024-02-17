import React from "react";
import Topbar from "../Topbar/Topbar";
import Navbar from "../Navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Headerbox from "../HeaderBox/Headerbox";
import Feature from "../Features/Feature";
import Componies from "../Componies/Componies";
import useGetActiveSlider from "../../Hooks/AdminPanel/sliders/useGetActiveSlider";
function Header() {
  const { data: sliders } = useGetActiveSlider();
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container grid grid-cols-1 lg:grid-cols-3 py-5 gap-y-5 lg:gap-x-5 overflow-hidden">
        <div className=" bg-white rounded-md shadow place-content-center  md:w-auto order-1 md:-order-1">
          <Swiper
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <Headerbox img="/images/product/wach1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <Headerbox img="/images/product/wach2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <Headerbox img="/images/product/wach3.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-span-2  rounded-md overflow-hidden">
          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {sliders?.map((slider) => (
              <SwiperSlide>
                <img src={`http://localhost:3001/uploads/covers/${slider.image}`} className="shadow" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Feature />
      <Componies />
    </>
  );
}

export default Header;
