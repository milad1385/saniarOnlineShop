import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import FooterMenu from "../../Components/FooterMenu/FooterMenu";
import Footer from "../../Components/Footer/Footer";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import TitleCat from "../../Components/TitleCat/TitleCat";

function Compare() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container">
        <BreadCrumb
          links={[
            { id: 1, name: "خانه", to: "/" },
            { id: 2, name: "فروشگاه", to: "/" },
            { id: 3, name: "مقایسه محصولات", to: "/" },
          ]}
        />
        <TitleCat main={'مقایسه'} desc={'محصولات'} isMain={true}/>
      </div>
      <Footer />
      <FooterMenu />
    </>
  );
}

export default Compare;
