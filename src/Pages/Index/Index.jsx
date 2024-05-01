import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Categories from "../../Components/Categories/Categories";
import WonderFullSlides from "../../Components/WonderFullSlides/WonderFullSlides";
import TopSaleProducts from "../../Components/TopSaleProducts/TopSaleProducts";
import TitleCat from "../../Components/TitleCat/TitleCat";
import AdsBox from "../../Components/AdsBox/AdsBox";
import BestSells from "../../Components/BestSells/BestSells";
import Baners from "../../Components/Baners/Baners";
import MoreSell from "../../Components/MoreSell/MoreSell";
import LastBlog from "../../Components/LastBlog/LastBlog";
import Footer from "../../Components/Footer/Footer";
import FooterMenu from "../../Components/FooterMenu/FooterMenu";
import Banner from "../../Components/Banner/Banner";
function Index() {
  const [isOffline, setIsOffline] = useState();

  useEffect(() => {
    window.addEventListener("offline", () => {
      setIsOffline(true);
    });

    window.addEventListener("online", () => {
      setIsOffline(false);
    });
  }, []);
  return (
    <>
      {isOffline ? (
        <div className="bg-blue-600 fixed inset-0 flex-center text-base md:text-2xl font-DanaDemiBold text-white">
          لطفا اتصال به اینترنت خود را چک کنید 💻
        </div>
      ) : (
        <>
          <Banner />
          <Header />
          <Categories />
          <WonderFullSlides />
          <TopSaleProducts />
          <div className="container grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-[100px] md:mt-12 pb-2">
            <AdsBox image={"banner-1.webp"} href={"/"} />
            <AdsBox image={"banner-2.webp"} href={"/"} />
            <AdsBox image={"banner-3.webp"} href={"/"} />
            <AdsBox image={"banner-4.webp"} href={"/"} />
          </div>
          <BestSells />
          <Baners />
          <MoreSell />
          <div className="container mt-12">
            <TitleCat
              main={"آخرین مطالب"}
              desc={"وبلاگ"}
              link={"/category-blog/all"}
            />
          </div>
          <LastBlog />
          <Footer />
          <FooterMenu />
        </>
      )}
    </>
  );
}

export default Index;
