import React from "react";
import TitleCat from "../TitleCat/TitleCat";
import CategoryCard from "../CategoryCard/CategoryCard";

function Categories() {
  return (
    <div className="container mt-10 pb-5">
      <TitleCat main={'محصولات'} desc={'دسته بندی'} />
      <div className=" grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        <CategoryCard title={"تلفن همراه"} image={"mobile.png"} />
        <CategoryCard title={"کالای ورزشی"} image={"varzeshi.png"} />
        <CategoryCard title={"کالای دیجیتال"} image={"kalaye-degital.png"} />
        <CategoryCard title={"پوشاک"} image={"poshak.png"} />
        <CategoryCard title={"لوازم التحریر"} image={"lavazem-tahrir.png"} />
        <CategoryCard title={"کالای سوپر مارکتی"} image={"milk.png"} />
        <CategoryCard title={"اسباب بازی"} image={"children.png"} />
        <CategoryCard title={"لوازم خودرو"} image={"abzar-khodro.png"} />
      </div>
    </div>
  );
}

export default Categories;
