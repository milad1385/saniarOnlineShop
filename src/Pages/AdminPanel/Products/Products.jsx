import React from "react";
import AddNewProduct from "./AddNewProduct/AddNewProduct";
import ProductList from "./ProductList/ProductList";

function Products() {
  return (
    <div className="container">
      <AddNewProduct />
      <ProductList />
    </div>
  );
}

export default Products;
