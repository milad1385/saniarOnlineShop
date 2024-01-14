import React from "react";

function FooterMenu() {
  return (
    <div className="bg-white h-[62px] flex md:hidden footer-menu sticky bottom-0 z-30  items-center justify-between  border-b-4 border-b-blue-600 px-4">
      <div>
        <svg
          className="w-7 h-7 text-zinc-600"
          onClick={() => window.scroll(0, 0)}
        >
          <use href="#chevron-up"></use>
        </svg>
      </div>
      <div>
        <svg className="w-7 h-7 text-zinc-600">
          <use href="#home"></use>
        </svg>
      </div>
      <div>
        <svg className="w-7 h-7 text-zinc-600">
          <use href="#archive"></use>
        </svg>
      </div>
      <div>
        <svg className="w-7 h-7 text-zinc-600">
          <use href="#user"></use>
        </svg>
      </div>
      <div className="bg-blue-500 text-white rounded-full w-[70px] h-[70px] flex-center bg-gradient-to-r from-blue-500 to-blue-600 absolute -top-10 right-0 left-0 mx-auto shadow-blue">
        <svg className="w-8 h-8 ">
          <use href="#shop-bag"></use>
        </svg>
      </div>
    </div>
  );
}

export default FooterMenu;
