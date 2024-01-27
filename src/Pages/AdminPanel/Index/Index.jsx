import React, { useRef, useState } from "react";
import TopBar from "../../../Components/AdminPanel/TopBar/TopBar";
import SideBar from "../../../Components/AdminPanel/SideBar/SideBar";
import { Outlet } from "react-router-dom";

function Index() {
  return (
    <>
      <div className="flex">
        <div className="sticky top-1">
          <SideBar />
        </div>
        <div className="w-full container pt-2 px-6">
          <TopBar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Index;
