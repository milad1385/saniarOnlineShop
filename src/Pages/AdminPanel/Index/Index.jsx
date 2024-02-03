import React, { useRef, useState } from "react";
import TopBar from "../../../Components/AdminPanel/TopBar/TopBar";
import SideBar from "../../../Components/AdminPanel/SideBar/SideBar";
import { Outlet } from "react-router-dom";
import Footer from "../../../Components/AdminPanel/Footer/Footer";

function Index() {
  const [isMenuShow, setIsMenuShow] = useState(false);
  return (
    <>
      <div className="flex">
        <div className="sticky z-50 top-1">
          <SideBar isMenuShow={isMenuShow} onShow={setIsMenuShow} />
        </div>
        <div className="w-full md:pt-2 md:px-6">
          <TopBar onShow={setIsMenuShow} />
          <Outlet />
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default Index;
