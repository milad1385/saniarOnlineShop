import React from "react";
import TitleCat from "../TitleCat/TitleCat";
import { Link } from "react-router-dom";
import BestSellsBox from "../BestSellBox/BestSellsBox";

function BestSells() {
  return (
    <div className="container">
      <TitleCat main={"محصولات"} desc={"پرفروش"} />
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-5">
        <BestSellsBox image={'laptop-1.jpg'} number={1}/>
        <BestSellsBox image={'product-image3.jpg'} number={2}/>
        <BestSellsBox image={'laptop-2.jpg'} number={5}/>
        <BestSellsBox image={'laptop-3.jpg'} number={8}/>
        <BestSellsBox image={'laptop-4.jpg'} number={10}/>
        <BestSellsBox image={'laptop-5.jpg'} number={2}/>
        <BestSellsBox image={'product-image1.jpg'} number={3}/>
        <BestSellsBox image={'product-image2.jpg'} number={4}/>
        <BestSellsBox image={'product-image4.jpg'} number={6}/>
        <BestSellsBox image={'wach2.jpg'} number={8}/>
        <BestSellsBox image={'product-image6.jpg'} number={5}/>
        <BestSellsBox image={'wach1.jpg'} number={1}/>
      </div>
    </div>
  );
}

export default BestSells;
