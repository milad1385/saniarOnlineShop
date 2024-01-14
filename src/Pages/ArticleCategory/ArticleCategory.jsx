import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import FooterMenu from "../../Components/FooterMenu/FooterMenu";
import Footer from "../../Components/Footer/Footer";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import TitleCat from "../../Components/TitleCat/TitleCat";
import ArticleBox from "../../Components/ArticleBox/ArticleBox";
import Pagination from "../../Components/Pagination/Pagination";

function ArticleCategory() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container">
        <BreadCrumb
          links={[
            { id: 1, name: "خانه", to: "/" },
            { id: 2, name: "وبلاگ", to: "/" },
            { id: 3, name: "فرانت اند", to: "/" },
          ]}
        />
        <TitleCat desc={"تکنولوژی"} main={"دسته بندی"} isMain={true} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          <ArticleBox image={"blog-4.jpg"} />
          <ArticleBox image={"blog-5.jpg"} />
          <ArticleBox image={"blog-6.jpg"} />
          <ArticleBox image={"blog-7.jpg"} />
          <ArticleBox image={"blog-8.jpg"} />
          <ArticleBox image={"blog-4.jpg"} />
          <ArticleBox image={"blog-5.jpg"} />
          <ArticleBox image={"blog-6.jpg"} />
        </div>
        <div>
          <Pagination />
        </div>
      </div>
      <FooterMenu />
      <Footer />
    </>
  );
}

export default ArticleCategory;
