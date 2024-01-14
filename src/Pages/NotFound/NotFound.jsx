import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import FooterMenu from "../../Components/FooterMenu/FooterMenu";

function NotFound() {
  return (
    <div>
      <Topbar />
      <Navbar />
        <div className="container flex items-center justify-center flex-wrap gap-16 my-12">
            <img src="/images/taxi-page-not-found-1.png"/>
            <img src="/images/techny-lettering-error-404-with-warning-sign-and-wrench-text.png"/>
        </div>
        <p className="font-DanaDemiBold text-lg  md:text-xl lg:text-3xl text-center mt-3">کاربر گرامی متاسفانه صفحه مورد نظر یافت نشد 🤐</p>
      <Footer />
      <FooterMenu />
    </div>
  );
}

export default NotFound;
