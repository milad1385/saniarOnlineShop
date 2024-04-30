import React from "react";
import { Link } from "react-router-dom";
import { isLogin } from "../../Utils/Funcs/utils";

function FooterMenu() {
  return (
    <div className="bg-white h-[62px] flex md:hidden footer-menu sticky bottom-0 z-30  items-center justify-between  border-b-4 border-b-blue-600 px-4">
      <div>
        <svg
          className="w-7 h-7 text-zinc-600"
          onClick={() => {
            window.scroll({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <use href="#chevron-up"></use>
        </svg>
      </div>
      <div>
        <Link to={"/"}>
          <svg className="w-7 h-7 text-zinc-600">
            <use href="#home"></use>
          </svg>
        </Link>
      </div>
      <div>
        <Link to={"/my-account"}>
          <svg className="w-7 h-7 text-zinc-600">
            <use href="#archive"></use>
          </svg>
        </Link>
      </div>
      <div>
        <Link to={"/my-account"}>
          <svg className="w-7 h-7 text-zinc-600">
            <use href="#user"></use>
          </svg>
        </Link>
      </div>
      <div className="bg-blue-500 text-white rounded-full w-[70px] h-[70px] flex-center bg-gradient-to-r from-blue-500 to-blue-600 absolute -top-10 right-0 left-0 mx-auto shadow-blue">
        {isLogin() ? (
          <Link to={"/order/card"}>
            <svg className="w-8 h-8 ">
              <use href="#shop-bag"></use>
            </svg>
          </Link>
        ) : (
          <Link to={"/login"}>
            <svg className="w-8 h-8 ">
              <use href="#arrow-left-on-rectangle"></use>
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}

export default FooterMenu;
