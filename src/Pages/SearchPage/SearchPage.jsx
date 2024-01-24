import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import FooterMenu from "../../Components/FooterMenu/FooterMenu";
import Footer from "../../Components/Footer/Footer";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import ProductBox from "../../Components/ProductBox/ProductBox";
import Pagination from "../../Components/Pagination/Pagination";

function SearchPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container">
        <BreadCrumb
          links={[
            { id: 1, name: "خانه", to: "/" },
            { id: 2, name: "فروشگاه", to: "/" },
            { id: 3, name: "لپ تاپ تاف", to: "/" },
          ]}
        />
        <div>
          <div className="flex items-center gap-x-3">
            <svg className="w-7 h-7 md:w-10 md:h-10">
              <use href="#magni-glass"></use>
            </svg>
            <p className="text-base md:text-xl lg:text-2xl font-MorabbaBold">
              محصول مورد جستجو :{" "}
              <span className="text-blue-600">لپ تاپ گیمینگ ایسوس</span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-x-7 mt-7">
            <ProductBox image={"product-image3.jpg"} />
            <ProductBox image={"product-image4.jpg"} />
            <ProductBox image={"product-image6.jpg"} />
            <ProductBox image={"television2.jpg"} />
            <ProductBox image={"laptop-4.jpg"} />
            <ProductBox image={"laptop-1.jpg"} />
            <ProductBox image={"laptop-2.jpg"} />
            <ProductBox image={"laptop-5.jpg"} />
          </div>
          <Pagination/>
        </div>
      </div>
      <Footer />
      <FooterMenu />
    </>
  );
}

export default SearchPage;
