import React from "react";
import OrderStatus from "../../Components/OrderStatus/OrderStatus";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import FooterMenu from "../../Components/FooterMenu/FooterMenu";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";

function Card() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container mt-8">
        <BreadCrumb
          links={[
            { id: 1, name: "خانه", to: "/" },
            { id: 2, name: "فروشگاه", to: "/" },
            { id: 3, name: "پرداخت", to: "/" },
          ]}
        />
        <OrderStatus />
      </div>

      <Footer />
      <FooterMenu />
    </>
  );
}

export default Card;
