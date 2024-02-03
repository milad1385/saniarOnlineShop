import React, { useContext, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import DeleteModal from "../../DeleteModal/DeleteModal";
import { AppContext } from "../../../App";

function SideBar({ isMenuShow, onShow }) {
  const [isShowExitModal, setIsShowExitModal] = useState(false);
  const { isShowAdminMenu, setIsShowAdminMenu } = useContext(AppContext);

  return (
    <>
      {/* start mobile menu */}
      <div
        className={`w-[220px] block md:hidden bg-blue-600 text-white overflow-y-auto fixed top-0 bottom-0 ${
          isShowAdminMenu ? "right-0" : "-right-[240px]"
        } z-50  transition-all`}
      >
        <h3 className="font-Lalezar text-lg md:text-[22px] text-center mt-2.5 border-b-2 pb-2 border-b-blue-500">
          به ادمین پنل خوش آمدید
        </h3>
        <div className="py-2 px-3">
          <ul className="side-links side-bar text-base md:text-xl font-Lalezar space-y-3">
            {" "}
            <li>
              <NavLink
                to={"/admin-panel/main"}
                className="flex items-center gap-x-2 cursor-pointer w-full"
              >
                <svg className="w-6 h-6">
                  <use href="#home"></use>
                </svg>
                <span className="">صفحه اصلی</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-panel/users"}
                className="flex items-center gap-x-2 cursor-pointer "
              >
                <svg className="w-6 h-6">
                  <use href="#user"></use>
                </svg>
                <span className="">کاربران</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-panel/products"}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <svg className="w-6 h-6">
                  <use href="#square"></use>
                </svg>
                <span className="">محصولات</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-panel/comments"}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <svg className="w-6 h-6">
                  <use href="#chat-bubble-left-right"></use>
                </svg>
                <span className="">کامنت ها</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-panel/orders"}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <svg className="w-6 h-6">
                  <use href="#shopping-cart"></use>
                </svg>
                <span className="">سفارشات</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-panel/discount"}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <svg className="w-6 h-6">
                  <use href="#gift"></use>
                </svg>
                <span className="">کد تخفیف</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-panel/tickets"}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <svg className="w-6 h-6">
                  <use href="#ticket"></use>
                </svg>
                <span className="">تیکت ها</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-panel/menus"}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <svg className="w-6 h-6">
                  <use href="#compare"></use>
                </svg>
                <span className="">منو ها </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-panel/articles"}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <svg className="w-6 h-6">
                  <use href="#article"></use>
                </svg>
                <span className="">مقاله ها</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-panel/capmaign"}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <svg className="w-6 h-6">
                  <use href="#pencil"></use>
                </svg>
                <span className="">کمپین</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-panel/ads-banner"}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <svg className="w-6 h-6">
                  <use href="#image"></use>
                </svg>
                <span className="">اسلایدر و بنر</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-panel/category"}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <svg className="w-6 h-6">
                  <use href="#link"></use>
                </svg>
                <span className="">دسته بندی </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-panel/contact-us"}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <svg className="w-6 h-6">
                  <use href="#chat"></use>
                </svg>
                <span className="">پیغام ها</span>
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                to={"/admin-panel/newsletter"}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <svg className="w-6 h-6">
                  <use href="#envelope"></use>
                </svg>
                <span className="">خبرنامه</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-panel/static"}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <svg className="w-6 h-6">
                  <use href="#static"></use>
                </svg>
                <span className="">محتوای استاتیک</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-panel/my-info"}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <svg className="w-6 h-6">
                  <use href="#edit"></use>
                </svg>
                <span className="">اطلاعات من</span>
              </NavLink>
            </li>
            <li onClick={() => setIsShowExitModal(true)}>
              <a className="flex items-center gap-x-2 cursor-pointer">
                <svg className="w-6 h-6">
                  <use href="#exit"></use>
                </svg>
                <span className="">خروج</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* start desktop menu */}
      <div
        className={`w-[235px] hidden md:block md:w-[265px] overflow-y-auto bg-blue-700 z-50 transition-all lg:sticky top-0 text-white min-h-screen `}
      >
        <h3 className="font-Lalezar text-lg md:text-[22px] text-center mt-2.5 border-b-2 pb-2 border-b-blue-500">
          به ادمین پنل خوش آمدید
        </h3>
        <div className="py-2 px-3 side-bar">
          <ul className="side-links text-base md:text-xl font-Lalezar space-y-3">
            {" "}
            <li>
              <NavLink
                to={"/admin-panel/main"}
                className="flex items-center gap-x-2 cursor-pointer w-full"
              >
                <svg className="w-6 h-6">
                  <use href="#home"></use>
                </svg>
                <span className="">صفحه اصلی</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-panel/users"}
                className="flex items-center gap-x-2 cursor-pointer "
              >
                <svg className="w-6 h-6">
                  <use href="#user"></use>
                </svg>
                <span className="">کاربران</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-panel/products"}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <svg className="w-6 h-6">
                  <use href="#square"></use>
                </svg>
                <span className="">محصولات</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-panel/comments"}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <svg className="w-6 h-6">
                  <use href="#chat-bubble-left-right"></use>
                </svg>
                <span className="">کامنت ها</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-panel/orders"}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <svg className="w-6 h-6">
                  <use href="#shopping-cart"></use>
                </svg>
                <span className="">سفارشات</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-panel/discount"}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <svg className="w-6 h-6">
                  <use href="#gift"></use>
                </svg>
                <span className="">کد تخفیف</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-panel/tickets"}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <svg className="w-6 h-6">
                  <use href="#ticket"></use>
                </svg>
                <span className="">تیکت ها</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-panel/menus"}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <svg className="w-6 h-6">
                  <use href="#compare"></use>
                </svg>
                <span className="">منو ها </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-panel/articles"}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <svg className="w-6 h-6">
                  <use href="#article"></use>
                </svg>
                <span className="">مقاله ها</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-panel/capmaign"}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <svg className="w-6 h-6">
                  <use href="#pencil"></use>
                </svg>
                <span className="">کمپین</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-panel/ads-banner"}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <svg className="w-6 h-6">
                  <use href="#image"></use>
                </svg>
                <span className="">اسلایدر و بنر</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-panel/category"}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <svg className="w-6 h-6">
                  <use href="#link"></use>
                </svg>
                <span className="">دسته بندی </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-panel/contact-us"}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <svg className="w-6 h-6">
                  <use href="#chat"></use>
                </svg>
                <span className="">پیغام ها</span>
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                to={"/admin-panel/newsletter"}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <svg className="w-6 h-6">
                  <use href="#envelope"></use>
                </svg>
                <span className="">خبرنامه</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-panel/static"}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <svg className="w-6 h-6">
                  <use href="#static"></use>
                </svg>
                <span className="">محتوای استاتیک</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin-panel/my-info"}
                className="flex items-center gap-x-2 cursor-pointer"
              >
                <svg className="w-6 h-6">
                  <use href="#edit"></use>
                </svg>
                <span className="">اطلاعات من</span>
              </NavLink>
            </li>
            <li onClick={() => setIsShowExitModal(true)}>
              <a className="flex items-center gap-x-2 cursor-pointer">
                <svg className="w-6 h-6">
                  <use href="#exit"></use>
                </svg>
                <span className="">خروج</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {isShowExitModal && (
        <DeleteModal
          onClose={setIsShowExitModal}
          title="آیا از خروج اطمینان دارید ؟"
        />
      )}
      <div
        onClick={() => setIsShowAdminMenu(false)}
        className={`bg-black/50 fixed inset-0 z-40 ${
          isShowAdminMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
    </>
  );
}

export default SideBar;
