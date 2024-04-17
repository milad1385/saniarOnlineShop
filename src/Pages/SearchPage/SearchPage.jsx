import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import FooterMenu from "../../Components/FooterMenu/FooterMenu";
import Footer from "../../Components/Footer/Footer";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import ProductBox from "../../Components/ProductBox/ProductBox";
import { useParams } from "react-router-dom";
import useSearch from "../../Hooks/AdminPanel/Product/useSearch";

function SearchPage() {
  const { value } = useParams();
  const { data: seachedProduct, isLoading } = useSearch(value);
  console.log(seachedProduct);
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container">
        <BreadCrumb
          links={[
            { id: 1, name: "خانه", to: "/" },
            { id: 2, name: "فروشگاه", to: "/products" },
            { id: 3, name: `${value}`, to: `/search/${value}` },
          ]}
        />
        <div>
          <div className="flex items-center gap-x-3">
            <svg className="w-7 h-7 md:w-10 md:h-10">
              <use href="#magni-glass"></use>
            </svg>
            <p className="text-base md:text-xl lg:text-2xl font-MorabbaBold">
              محصول مورد جستجو : <span className="text-blue-600">{value}</span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-x-7 mt-7">
            {seachedProduct?.map((product) => (
              <ProductBox product={product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <FooterMenu />
    </>
  );
}

export default SearchPage;
