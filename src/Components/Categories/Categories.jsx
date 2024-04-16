import React from "react";
import TitleCat from "../TitleCat/TitleCat";
import CategoryCard from "../CategoryCard/CategoryCard";
import useGetAll from "../../Hooks/AdminPanel/Category/useGetAll";

function Categories() {
  const { data: categories } = useGetAll();
  return (
    <div className="container mt-10 pb-5">
      <TitleCat main={"محصولات"} desc={"دسته بندی"} />
      <div className=" grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {categories?.categories.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
