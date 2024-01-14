import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import FooterMenu from "../../Components/FooterMenu/FooterMenu";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import TitleCat from "../../Components/TitleCat/TitleCat";
import ProductBox from "../../Components/ProductBox/ProductBox";
import Pagination from "../../Components/Pagination/Pagination";

function ProductsCategory() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container">
        <BreadCrumb
          links={[
            { id: 1, name: "خانه", to: "/" },
            { id: 2, name: "محصولات", to: "/" },
            { id: 3, name: "لپ تاپ", to: "/" },
          ]}
        />
        <TitleCat desc={"لپ تاپ"} main={"دسته بندی"} isMain={true} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
          <ProductBox image={"laptop-1.jpg"} />
          <ProductBox image={"product-image3.jpg"} />
          <ProductBox image={"laptop-2.jpg"} />
          <ProductBox image={"laptop-3.jpg"} />
          <ProductBox image={"laptop-4.jpg"} />
          <ProductBox image={"laptop-5.jpg"} />
          <ProductBox image={"laptop-1.jpg"} />
          <ProductBox image={"laptop-4.jpg"} />
        </div>
        <Pagination />
      </div>

      <Footer />
      <FooterMenu />
    </>
  );
}

export default ProductsCategory;
