import React, { useContext, useEffect, useRef, useState } from "react";
import useBasket from "../../Hooks/basket/useBasket";
import useMenu from "../../Hooks/AdminPanel/menu/useMenu";
import { AppContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import { isLogin } from "../../Utils/Funcs/utils";
import ProfileBox from "../Topbar/ProfileBox";
import BasketItem from "./BasketItem";
import MobileMenuLink from "./MobileMenuLink";

function MobileMenu({ isUserPanel, role }) {
  const [isShowUserBox, setIsShowUserBox] = useState(false);
  const context = useContext(AppContext);
  const { data: baskets } = useBasket();
  const { data: menus } = useMenu();
  const navigate = useNavigate();

  const overlayRef = useRef();
  const menuRef = useRef();
  const subMenuRef = useRef();
  const basketRef = useRef();
  const calculateTotalPrice = baskets?.reduce(
    (prev, curr) => prev + curr.price * curr.qty,
    0
  );

  const calcTotalDiscount = baskets?.reduce(
    (prev, curr) =>
      prev + (curr.qty * (curr.product.price * curr.product.off)) / 100,
    0
  );

  const calcTotal = calculateTotalPrice - calcTotalDiscount;

  const showMenu = () => {
    overlayRef.current.classList.remove("hide-menu");
    overlayRef.current.classList.add("active-menu");
    menuRef.current.classList.remove("-right-[240px]");
    menuRef.current.classList.add("right-0");
  };

  const closeMenu = () => {
    overlayRef.current.classList.add("hide-menu");
    overlayRef.current.classList.remove("active-menu");
    menuRef.current.classList.add("-right-[240px]");
    menuRef.current.classList.remove("right-0");
    basketRef.current.classList.remove("left-0");
    basketRef.current.classList.add("-left-64");
    setIsShowUserBox(false);
  };

  const showSubMenu = (e) => {
    e.target.classList.toggle("-rotate-90");
    subMenuRef.current.classList.toggle("hidden");
  };

  const showBasket = () => {
    basketRef.current.classList.remove("-left-64");
    basketRef.current.classList.add("left-0");
    overlayRef.current.classList.remove("hide-menu");
    overlayRef.current.classList.add("active-menu");
  };
  useEffect(() => {
    closeMenu();
  }, [location.href]);
  return (
    <>
      {/* start mobile menu */}
      <div className="block md:hidden shadow-lg p-5 bg-white sticky -top-1 z-30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-1">
            <svg className="w-7 h-7 sm:w-8 sm:h-8" onClick={showMenu}>
              <use href="#bars-3"></use>
            </svg>
            <img
              src="/images/logo.png"
              className="w-[140px] sm:w-[170px] select-none"
              alt="logo"
            />
          </div>
          <div className="flex items-center gap-x-3 sm:gap-x-4">
            <div
              className="bg-gray-100 p-3 sm:p-4 rounded-md shadow relative"
              onClick={showBasket}
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7">
                <use href="#shop-bag"></use>
              </svg>
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white shadow-blue py-0.5 px-2.5 rounded-full text-xs">
                {baskets?.length}
              </span>
            </div>
            <div className="bg-gray-100 rounded-full p-0.5">
              <img
                onClick={() =>
                  isLogin() ? setIsShowUserBox(true) : navigate("/login")
                }
                src={
                  context?.isLogin ?? context?.isLogin
                    ? `https://shoppingmilad.liara.run/uploads/covers/${context?.userInfo?.image}`
                    : "/images/user.png"
                }
                alt=""
                className="w-[56px] h-[56px] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      {/* start mobile acoridion menu */}
      <div
        className="w-[240px] bg-white overflow-y-auto fixed top-0 bottom-0 -right-[240px] z-50 p-3 transition-all"
        ref={menuRef}
      >
        <div className="border-b border-b-gray-300 pb-3">
          <div className="flex items-center justify-between">
            {/* <h3 className="font-DanaDemiBold">سانیار</h3> */}
            <img src="/images/logo.png" alt="logo" className="w-28" />
            <div onClick={closeMenu}>
              <svg className="w-6 h-6">
                <use href="#x-mark"></use>
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-between bg-gray-100  p-1.5 rounded-md mt-3">
            <input
              type="text"
              placeholder="جستجو محصولات..."
              className="bg-gray-100 outline-none text-sm"
            />
            <button className="bg-blue-600 text-white p-1 rounded-md shadow-blue">
              <svg className="w-5 h-5">
                <use href="#magni-glass"></use>
              </svg>
            </button>
          </div>
        </div>
        <div className="my-3 bg-blue-600 text-white p-2 rounded-md">
          <Link to={isUserPanel ? "/my-account" : "/"} className="flex gap-x-2">
            <svg className="w-5 h-5">
              <use href="#home"></use>
            </svg>
            صفحه اصلی
          </Link>
        </div>
        {/* start menu body */}
        {isUserPanel ? (
          <ul className="p-2 pb-5 space-y-4 border-b border-b-gray-300">
            <MobileMenuLink
              title={"پروفایل"}
              icon={"user"}
              link={"/my-account/profile"}
            />
            <MobileMenuLink
              title={"سفارش های من"}
              icon={"shop-card"}
              link={"/my-account/orders"}
            />
            <MobileMenuLink
              title={"آدرس های من"}
              icon={"map"}
              link={"/my-account/address"}
            />

            <MobileMenuLink
              title={"پیام ها و اطلاعیه ها"}
              icon={"bell"}
              link={"/my-account/notifications"}
            />

            <MobileMenuLink
              title={"نظرات"}
              icon={"msg"}
              link={"/my-account/comments"}
            />

            <MobileMenuLink
              title={"علاقه مندی ها"}
              icon={"heart"}
              link={"/my-account/Favorite"}
            />

            <MobileMenuLink
              title={"تیکت های من"}
              icon={"ticket"}
              link={"/my-account/tickets"}
            />
          </ul>
        ) : (
          <ul className="p-2 pb-5 space-y-4 border-b border-b-gray-300">
            <li>
              <div className="flex justify-between">
                <Link to={"/products"} className="flex gap-x-2">
                  <svg className="w-5 h-5">
                    <use href="#shop-bag"></use>
                  </svg>
                  فروشگاه
                </Link>
                <div>
                  <svg
                    className="w-5 h-5 -rotate-90 transition-all"
                    onClick={(e) => showSubMenu(e)}
                  >
                    <use href="#chevron-left"></use>
                  </svg>
                </div>
              </div>
              <ul
                className="hidden mt-2 space-y-2 text-sm text-blue-600 pr-2"
                ref={subMenuRef}
              >
                {menus?.map((menu) => (
                  <li key={menu} className="flex items-center gap-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 block"></span>
                    <Link to={`/category-products/${menu.link}`}>
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <MobileMenuLink
              title={"درباره ما"}
              icon={"bag"}
              link={"/about-us"}
            />
            <MobileMenuLink
              title={"بلاگ"}
              icon={"document-text"}
              link={"/Blog"}
            />

            <MobileMenuLink
              title={"تماس با ما"}
              icon={"chat"}
              link={"/contact-us"}
            />
            {role === "ADMIN" && (
              <MobileMenuLink
                title={"پنل مدیریت"}
                icon={"setting"}
                link={"/admin-panel"}
              />
            )}
          </ul>
        )}
        <div className="p-2 pt-5 space-y-4">
          {isLogin() ? (
            <Link to={"/my-account"} className="flex items-center gap-x-1.5">
              <svg className="w-6 h-6">
                <use href="#user"></use>
              </svg>
              <span>{context?.userInfo?.name}</span>
            </Link>
          ) : (
            <Link className="flex items-center gap-x-2 text-blue-600">
              <svg className="w-5 h-5">
                <use href="#arrow-left-on-rectangle"></use>
              </svg>
              ورود و ثبت نام
            </Link>
          )}
          <Link
            to={"/order/card"}
            className="flex items-center gap-x-2 text-blue-600"
          >
            <svg className="w-5 h-5">
              <use href="#shopping-cart"></use>
            </svg>
            سبد خرید
          </Link>
        </div>
      </div>
      <div
        className="flex flex-col justify-between fixed top-0 bottom-0   bg-white dark:bg-zinc-700 w-64 transition-all duration-200 shopping-bag -left-64 z-50"
        ref={basketRef}
      >
        <div className="">
          <div className="bg-gray-100">
            <div className="flex items-center justify-between pt-4 pb-3 px-4">
              <svg
                className=" dark:text-white w-5 h-5 close-bag"
                onClick={closeMenu}
              >
                <use href="#x-mark"></use>
              </svg>
              <span className="text-zinc-700 dark:text-white font-DanaDemiBold">
                سبد خرید
              </span>
            </div>
          </div>

          {baskets?.length > 0 && (
            <div className="flex flex-col divide-y overflow-auto h-[490px]  px-4 divide-gray-100 dark:divide-white/20 border-b border-b-gray-300 dark:border-b-gray-100/30">
              {baskets?.map((basket) => (
                <BasketItem key={basket._id} {...basket} />
              ))}
            </div>
          )}
        </div>

        {baskets?.length > 0 ? (
          <div className="flex items-center justify-between py-5 px-4">
            <Link
              to={"/order/card"}
              className="w-28 h-11 flex items-center justify-center bg-blue-600  text-white rounded-md"
            >
              ثبت سفارش
            </Link>
            <div className="w-[100px]">
              <span className="text-xs text-gray-300 tracking-tight font-DanaMedium">
                مبلغ قابل پرداخت
              </span>
              <div className="text-zinc-700 dark:text-white font-DanaDemiBold text-sm md:text-md">
                {calcTotal.toLocaleString("fa")}
                <span className="text-xs font-Dana tracking-tight">تومان</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center flex-col my-auto">
            <img src="/images/emptybag.png" className="w-[300px]" />
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-DanaDemiBold">
              سبد خرید شما خالی است 🤐
            </p>
            <Link
              to={"/products"}
              className="bg-blue-600 text-white p-2 px-4 font-DanaDemiBold rounded-md shadow-blue my-10"
            >
              بازگشت به فروشگاه
            </Link>
          </div>
        )}
      </div>
      <div className="relative left-[1rem]">
        <ProfileBox
          isShowUserBox={isShowUserBox}
          image={context?.userInfo?.image}
          onShow={setIsShowUserBox}
        />
      </div>

      {/* overlay */}
      <div
        onClick={closeMenu}
        className={`hide-menu  overlay fixed inset-0 bg-black/50 z-40 transition-all`}
        ref={overlayRef}
      ></div>
    </>
  );
}

export default MobileMenu;
