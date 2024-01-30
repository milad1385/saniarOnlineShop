import React from "react";
import AddNewCategory from "./AddNewCategory/AddNewCategory";
import CategoriesList from "./CategoriesList/CategoriesList";

function Category() {
  return (
    <div className="container">
      <AddNewCategory />
      <CategoriesList />
    </div>
  );
}

export default Category;
