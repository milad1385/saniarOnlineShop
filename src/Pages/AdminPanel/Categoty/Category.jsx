import React, { useContext, useEffect } from "react";
import AddNewCategory from "./AddNewCategory/AddNewCategory";
import CategoriesList from "./CategoriesList/CategoriesList";
import { AppContext } from "../../../App";

function Category() {
  const {setIsShowAdminMenu } = useContext(AppContext);
  useEffect(() => {
    setIsShowAdminMenu(false);
  }, []);
  return (
    <div className="container">
      <AddNewCategory />
      <CategoriesList />
    </div>
  );
}

export default Category;
