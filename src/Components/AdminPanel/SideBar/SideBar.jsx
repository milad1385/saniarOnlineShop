import React, { useContext, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import DeleteModal from "../../DeleteModal/DeleteModal";
import { AppContext } from "../../../App";
import Menu from "../Menu/Menu";

function SideBar({ isMenuShow, onShow }) {
  const [isShowExitModal, setIsShowExitModal] = useState(false);
  const navigate = useNavigate();
  const { isShowAdminMenu, setIsShowAdminMenu, logout } =
    useContext(AppContext);

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
          <div className="side-links flex justify-between flex-col text-base md:text-xl font-Lalezar h-[90vh]">
            <div className="space-y-1.5 mt-2">
              <li className="list-none">
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
              <Menu
                title={"مدیریت"}
                icon={"setting"}
                items={[
                  { title: "محصولات", link: "products", icon: "square" },
                  { title: "مقالات", link: "articles", icon: "article" },
                  { title: "کد تخفیف", link: "discount", icon: "gift" },
                  { title: "دسته بندی", link: "category", icon: "link" },
                ]}
              />
              <Menu
                title={"ارتباطات"}
                icon={"contact-ico"}
                items={[
                  { title: "تیکت ها", link: "tickets", icon: "ticket" },
                  {
                    title: "کامنت ها",
                    link: "comments",
                    icon: "chat-bubble-left-right",
                  },
                  { title: "پیغام ها", link: "contact-us", icon: "chat" },
                  { title: "خبرنامه ها", link: "newsletter", icon: "envelope" },
                ]}
              />
              <Menu
                title={"اطلاعات"}
                icon={"data-base"}
                items={[
                  { title: "کاربران", link: "users", icon: "user" },
                  { title: "اطلاعات من", link: "my-info", icon: "edit" },
                ]}
              />
              <Menu
                title={"تبلیغات"}
                icon={"advertisment"}
                items={[
                  { title: "اسلایدر و بنر", link: "ads-banner", icon: "image" },
                  { title: "کمپین", link: "capmaign", icon: "pencil" },
                ]}
              />
              <Menu
                title={"فروشگاه"}
                icon={"shop"}
                items={[
                  { title: "سفارشات", link: "orders", icon: "image" },
                  { title: "منو ها", link: "menus", icon: "pencil" },
                  { title: "محتوای استاتیک", link: "static", icon: "static" },
                  { title: "غیر فعال کردن", link: "off", icon: "power-off" },
                ]}
              />
            </div>

            <div className="mt-auto border-t-2 border-t-blue-500 pt-2">
              <li
                className="list-none"
                onClick={() => setIsShowExitModal(true)}
              >
                <a className="flex items-center justify-between cursor-pointer">
                  <span className="">خروج</span>
                  <svg className="w-6 h-6">
                    <use href="#exit"></use>
                  </svg>
                </a>
              </li>
            </div>
          </div>
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
          <div className="side-links flex justify-between flex-col text-base md:text-xl font-Lalezar h-[90vh]">
            <div className="space-y-1.5 mt-2 pb-2">
              <li className="list-none">
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
              <Menu
                title={"مدیریت"}
                icon={"setting"}
                items={[
                  { title: "محصولات", link: "products", icon: "square" },
                  { title: "مقالات", link: "articles", icon: "article" },
                  { title: "کد تخفیف", link: "discount", icon: "gift" },
                  { title: "دسته بندی", link: "category", icon: "link" },
                ]}
              />
              <Menu
                title={"ارتباطات"}
                icon={"contact-ico"}
                items={[
                  { title: "تیکت ها", link: "tickets", icon: "ticket" },
                  {
                    title: "کامنت ها",
                    link: "comments",
                    icon: "chat-bubble-left-right",
                  },
                  { title: "پیغام ها", link: "contact-us", icon: "chat" },
                  { title: "خبرنامه ها", link: "newsletter", icon: "envelope" },
                ]}
              />
              <Menu
                title={"اطلاعات"}
                icon={"data-base"}
                items={[
                  { title: "کاربران", link: "users", icon: "user" },
                  { title: "اطلاعات من", link: "my-info", icon: "edit" },
                ]}
              />
              <Menu
                title={"تبلیغات"}
                icon={"advertisment"}
                items={[
                  { title: "اسلایدر و بنر", link: "ads-banner", icon: "image" },
                  { title: "کمپین", link: "capmaign", icon: "pencil" },
                ]}
              />
              <Menu
                title={"فروشگاه"}
                icon={"shop"}
                items={[
                  { title: "سفارشات", link: "orders", icon: "image" },
                  { title: "منو ها", link: "menus", icon: "pencil" },
                  { title: "محتوای استاتیک", link: "static", icon: "static" },
                  { title: "غیر فعال کردن", link: "off", icon: "power-off" },
                ]}
              />
            </div>

            <div className="mt-auto border-t-2 border-t-blue-500 pt-2">
              <li
                className="list-none"
                onClick={() => setIsShowExitModal(true)}
              >
                <a className="flex items-center justify-between cursor-pointer">
                  <span className="">خروج</span>
                  <svg className="w-6 h-6">
                    <use href="#exit"></use>
                  </svg>
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
      {isShowExitModal && (
        <DeleteModal
          onClose={setIsShowExitModal}
          title="آیا از خروج اطمینان دارید ؟"
          onClick={() => {
            logout();
            navigate("/");
          }}
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
