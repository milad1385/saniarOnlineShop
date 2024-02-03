import React, { useContext, useEffect } from "react";
import AddNewProduct from "./AddNewProduct/AddNewProduct";
import ProductList from "./ProductList/ProductList";
import { AppContext } from "../../../App";

function Products() {
  const {setIsShowAdminMenu } = useContext(AppContext);
  useEffect(() => {
    setIsShowAdminMenu(false);
  }, []);
  return (
    <div className="container">
      <AddNewProduct />
      <ProductList />
    </div>
  );
}

export default Products;
