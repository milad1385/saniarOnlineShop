import "swiper/css";
import "swiper/css/pagination";
import React, { useState } from "react";
import Topbar from "../Topbar/Topbar";
import Navbar from "../Navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Headerbox from "../HeaderBox/Headerbox";
import Feature from "../Features/Feature";
import Componies from "../Componies/Componies";
import useGetActiveSlider from "../../Hooks/AdminPanel/sliders/useGetActiveSlider";
import useGetAllPro from "../../Hooks/AdminPanel/Product/useGetAllPro";
import Loader from "../Loader/Loader";
function Header() {
  const [isLoad, setIsLoad] = useState(true);
  const { data: sliders, isLoading } = useGetActiveSlider();
  const { data: products } = useGetAllPro();

  const loadingImage = () => setIsLoad(false);

  if (isLoading) return <Loader />;
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
            {products
              ?.filter((product) => product.off > 0)
              .map((product) => (
                <SwiperSlide key={product._id}>
                  <Headerbox {...product} />
                </SwiperSlide>
              ))}
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
              <SwiperSlide key={slider._id}>
                <img
                  src={
                    isLoad
                      ? `/images/slide4.jpg`
                      : `https://shoppingmilad.liara.run/uploads/covers/${slider.image}`
                  }
                  className="shadow"
                  onLoad={loadingImage}
                />
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
