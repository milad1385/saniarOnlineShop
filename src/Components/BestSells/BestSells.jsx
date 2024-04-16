import React from "react";
import TitleCat from "../TitleCat/TitleCat";
import { Link } from "react-router-dom";
import BestSellsBox from "../BestSellBox/BestSellsBox";
import useGetAllPro from "../../Hooks/AdminPanel/Product/useGetAllPro";

function BestSells() {
  const { data: products } = useGetAllPro();
  return (
    <div className="container">
      <TitleCat main={"محصولات"} desc={"پرفروش"} />
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-5">
        {products?.slice(0, 12).map((product, index) => (
          <Link to={`/product/${product.link}`}>
            <BestSellsBox {...product} number={index + 1} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BestSells;
