import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import MegaMenuItem from "../MegaMenuItem/MegaMenuItem";
import MegaMenuValue from "../MegaMenuValue/MegaMenuValue";
import { AppContext } from "../../App";
import useGetAll from "../../Hooks/AdminPanel/static/address/useGetAll";

function Navbar() {
  const { userInfo, isLogin } = useContext(AppContext);
  const { data: info } = useGetAll();
  const overlayRef = useRef();
  const menuRef = useRef();
  const subMenuRef = useRef();
  const basketRef = useRef();

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

  const megaMenu = [
    { id: 1, title: "گوشی اپل", link: "" },
    { id: 2, title: "گوشی سامسونگ", link: "" },
    { id: 3, title: "گوشی هواوی", link: "" },
    { id: 4, title: "گوشی شیایومی", link: "" },
    { id: 5, title: "گوشی بلک بری", link: "" },
    { id: 6, title: "گوشی لنوو", link: "" },
  ];
  return (
    <>
      <div className="hidden md:block shadow-lg p-5 bg-white sticky -top-1 z-30">
        <div className={`flex items-center justify-between container`}>
          <div>
            <ul className="flex items-center gap-x-5 hover:child:text-blue-600">
              <li className="pb-2 group">
                <Link
                  to={""}
                  className="flex items-center w-full relative gap-x-1.5 bg-blue-600 py-2 px-3 rounded-md text-white shadow-blue text-sm lg:text-sm xl:text-lg"
                >
                  <svg className="w-6 h-6">
                    <use href="#bar"></use>
                  </svg>
                  مگا تب منو
                  {/* start mega menu codding */}
                  <div className="absolute flex z-50  opacity-0 invisible group-hover:opacity-100 w-[650px] md:w-[768px] lg:w-[1024px] xl:w-[1250px] xxl:w-[1440px] group-hover:visible transition-all bg-white shadow-lg rounded-br-md rounded-bl-md top-[65px]">
                    <div className="bg-gray-300 rounded-br-md w-[300px]">
                      <ul className="child:py-[12.5px] child:transition-all  child:px-2  child-hover:bg-blue-600 child-hover:text-white text-zinc-800 divide-y-[1px] divide-zinc-400">
                        <MegaMenuItem
                          title={"موبایل"}
                          icon={"mobile"}
                          link={""}
                        />
                        <MegaMenuItem title={"تبلت"} icon={"t-b"} link={""} />
                        <MegaMenuItem
                          title={"آنتی ویروس"}
                          icon={"check"}
                          link={""}
                        />
                        <MegaMenuItem
                          title={"لپ تاپ"}
                          icon={"sample"}
                          link={""}
                        />
                        <MegaMenuItem title={"پرفروش"} icon={"tag"} link={""} />
                        <MegaMenuItem
                          title={"جشنواره های تخفیف"}
                          icon={"presell"}
                          link={""}
                        />
                        <MegaMenuItem
                          title={"ملزومات عکاسی"}
                          icon={"camera"}
                          link={""}
                        />
                        <MegaMenuItem
                          title={"کیف و کفش"}
                          icon={"bag"}
                          link={""}
                        />
                      </ul>
                    </div>
                    <div className="bg-white text-zinc-800 py-4 px-4">
                      <ul className="flex items-center flex-wrap gap-8">
                        <MegaMenuValue
                          items={megaMenu}
                          name={"برند های مختلف گوشی"}
                        />
                        <MegaMenuValue
                          items={megaMenu}
                          name={"برند های مختلف گوشی"}
                        />
                        <MegaMenuValue
                          items={megaMenu}
                          name={"برند های مختلف گوشی"}
                        />
                        <MegaMenuValue
                          items={megaMenu}
                          name={"برند های مختلف گوشی"}
                        />
                        <MegaMenuValue
                          items={megaMenu}
                          name={"برند های مختلف گوشی"}
                        />
                        <MegaMenuValue
                          items={megaMenu}
                          name={"برند های مختلف گوشی"}
                        />
                        <MegaMenuValue
                          items={megaMenu}
                          name={"برند های مختلف گوشی"}
                        />
                        <MegaMenuValue
                          items={megaMenu}
                          name={"برند های مختلف گوشی"}
                        />
                      </ul>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="pb-2">
                <Link
                  to={""}
                  className="flex items-center gap-x-1.5 text-sm lg:text-sm xl:text-lg"
                >
                  موبایل
                  <svg className="w-6 h-6">
                    <use href="#mobile"></use>
                  </svg>
                </Link>
              </li>
              <li className="pb-2">
                <Link
                  to={""}
                  className="flex items-center gap-x-1.5 text-sm lg:text-sm xl:text-lg"
                >
                  منو ساده
                  <svg className="w-6 h-6">
                    <use href="#sample"></use>
                  </svg>
                </Link>
              </li>
              <li className="pb-2">
                <Link
                  to={""}
                  className="flex items-center gap-x-1.5 text-sm lg:text-sm xl:text-lg"
                >
                  تخفیف ها و پیشنهادات
                  <svg className="w-6 h-6">
                    <use href="#tag"></use>
                  </svg>
                </Link>
              </li>
              <li className="pb-2">
                <Link
                  to={""}
                  className="flex items-center gap-x-1.5 text-sm lg:text-sm xl:text-lg"
                >
                  سوالی دارید
                </Link>
              </li>
              {userInfo?.role === "ADMIN" && (
                <li className="pb-2">
                  <Link
                    to={"/admin-panel"}
                    className="flex items-center gap-x-1.5 text-sm lg:text-sm xl:text-lg"
                  >
                    پنل مدیریت
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className="flex items-center gap-x-2 text-white">
            <Link className="flex items-center gap-x-1.5 bg-gradient-to-r from-blue-500 to-blue-600 py-2 px-3 rounded-lg shadow-blue">
              <svg className="w-7 h-7">
                <use href="#telegram"></use>
              </svg>
              <span className="hidden xl:block">
                {info?.length ? info[0]?.phone : "09336084013"}
              </span>
            </Link>
            <Link className="flex items-center gap-x-1.5 bg-gradient-to-l from-pink-500 to-pink-600 py-2 px-3 rounded-lg shadow-pink">
              <svg className="w-7 h-7">
                <use href="#instagram"></use>
              </svg>
              <span className="hidden xl:block">{info?.length ? info[0]?.instagram : ""}</span>
            </Link>
          </div>
        </div>
      </div>
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
                5
              </span>
            </div>
            <div className="bg-gray-100 rounded-full p-0.5">
              <img
                src={
                  isLogin
                    ? `http://localhost:3001/uploads/covers/${userInfo?.image}`
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
          <Link className="flex gap-x-2">
            <svg className="w-5 h-5">
              <use href="#home"></use>
            </svg>
            صفحه اصلی
          </Link>
        </div>
        {/* start menu body */}
        <ul className="p-2 pb-5 space-y-4 border-b border-b-gray-300">
          <li>
            <Link className="flex justify-between">
              <div className="flex gap-x-2">
                <svg className="w-5 h-5">
                  <use href="#shop-bag"></use>
                </svg>
                فروشگاه
              </div>
              <div>
                <svg
                  className="w-5 h-5 -rotate-90 transition-all"
                  onClick={(e) => showSubMenu(e)}
                >
                  <use href="#chevron-left"></use>
                </svg>
              </div>
            </Link>
            <ul
              className="hidden mt-2 space-y-2 text-sm text-blue-600 pr-2"
              ref={subMenuRef}
            >
              <li className="flex items-center gap-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 block"></span>
                <Link to={"/"}>لپ تاپ ها</Link>
              </li>
              <li className="flex items-center gap-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 block"></span>
                <Link to={"/"}>گوشی ها</Link>
              </li>
              <li className="flex items-center gap-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 block"></span>
                <Link to={"/"}>پوشاک</Link>
              </li>
              <li className="flex items-center gap-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 block"></span>
                <Link to={"/"}>مواد غذایی</Link>
              </li>
              <li className="flex items-center gap-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 block"></span>
                <Link to={"/"}>اسباب بازی</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="flex justify-between">
              <div className="flex gap-x-2">
                <svg className="w-5 h-5">
                  <use href="#bag"></use>
                </svg>
                درباره ما
              </div>
            </Link>
          </li>
          <li>
            <Link className="flex justify-between">
              <div className="flex gap-x-2">
                <svg className="w-5 h-5">
                  <use href="#document-text"></use>
                </svg>
                بلاگ
              </div>
            </Link>
          </li>
          <li>
            <Link className="flex justify-between">
              <div className="flex gap-x-2">
                <svg className="w-5 h-5">
                  <use href="#chat"></use>
                </svg>
                ارتباط با ما
              </div>
            </Link>
          </li>
          <li>
            <Link className="flex justify-between">
              <div className="flex gap-x-2">
                <svg className="w-5 h-5">
                  <use href="#phone-arrow-up-right"></use>
                </svg>
                تماس با ما
              </div>
            </Link>
          </li>
        </ul>
        <div className="p-2 pt-5 space-y-4">
          <Link className="flex items-center gap-x-2 text-blue-600">
            <svg className="w-5 h-5">
              <use href="#arrow-left-on-rectangle"></use>
            </svg>
            ورود و ثبت نام
          </Link>
          <Link className="flex items-center gap-x-2 text-blue-600">
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

          <div className="flex flex-col divide-y overflow-auto h-[490px]  px-4 divide-gray-100 dark:divide-white/20 border-b border-b-gray-300 dark:border-b-gray-100/30">
            <div className="pb-4">
              <div className="flex py-4 gap-x-2">
                <img
                  className="w-20 h-20"
                  src="./images/product/laptop-5.jpg"
                  alt="image"
                />
                <div className="flex flex-col justify-between">
                  <h3 className="text-zinc-700 dark:text-white font-DanaMedium text-sm line-clamp-2">
                    لپ تاپ لنوو 8 گیگابایت رم و 1 ترابایت حافظه
                  </h3>
                  <div className="">
                    <span className="text-teal-600 dark:text-emerald-500 text-xs font-DanaMedium">
                      14.500 تومان تخفیف
                    </span>
                    <div className="text-zinc-700 dark:text-white font-DanaDemiBold">
                      175,000{" "}
                      <span className="text-xs font-Dana tracking-tight">
                        تومان
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <div className="bg-blue-600 w-7 h-7 flex-center text-white rounded-full ">
                    <span className="mt-[3px]">+</span>
                  </div>
                  <div className="font-DanaDemiBold">1</div>
                  <div className="bg-blue-600 w-7 h-7 flex-center text-white rounded-full ">
                    <span className="mt-[3px]">-</span>
                  </div>
                </div>
                <div className="bg-blue-600 text-white p-1 rounded-md shadow-blue">
                  <svg className="w-5 h-5">
                    <use href="#trash"></use>
                  </svg>
                </div>
              </div>
            </div>
            <div className="pb-4">
              <div className="flex py-4 gap-x-2">
                <img
                  className="w-20 h-20"
                  src="./images/product/laptop-4.jpg"
                  alt="image"
                />
                <div className="flex flex-col justify-between">
                  <h3 className="text-zinc-700 dark:text-white font-DanaMedium text-sm line-clamp-2">
                    لپ تاپ لنوو 8 گیگابایت رم و 1 ترابایت حافظه
                  </h3>
                  <div className="">
                    <span className="text-teal-600 dark:text-emerald-500 text-xs font-DanaMedium">
                      14.500 تومان تخفیف
                    </span>
                    <div className="text-zinc-700 dark:text-white font-DanaDemiBold">
                      175,000{" "}
                      <span className="text-xs font-Dana tracking-tight">
                        تومان
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <div className="bg-blue-600 w-7 h-7 flex-center text-white rounded-full ">
                    <span className="mt-[3px]">+</span>
                  </div>
                  <div className="font-DanaDemiBold">1</div>
                  <div className="bg-blue-600 w-7 h-7 flex-center text-white rounded-full ">
                    <span className="mt-[3px]">-</span>
                  </div>
                </div>
                <div className="bg-blue-600 text-white p-1 rounded-md shadow-blue">
                  <svg className="w-5 h-5">
                    <use href="#trash"></use>
                  </svg>
                </div>
              </div>
            </div>
            <div className="pb-4">
              <div className="flex py-4 gap-x-2">
                <img
                  className="w-20 h-20"
                  src="./images/product/laptop-1.jpg"
                  alt="image"
                />
                <div className="flex flex-col justify-between">
                  <h3 className="text-zinc-700 dark:text-white font-DanaMedium text-sm line-clamp-2">
                    لپ تاپ لنوو 8 گیگابایت رم و 1 ترابایت حافظه
                  </h3>
                  <div className="">
                    <span className="text-teal-600 dark:text-emerald-500 text-xs font-DanaMedium">
                      14.500 تومان تخفیف
                    </span>
                    <div className="text-zinc-700 dark:text-white font-DanaDemiBold">
                      175,000{" "}
                      <span className="text-xs font-Dana tracking-tight">
                        تومان
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <div className="bg-blue-600 w-7 h-7 flex-center text-white rounded-full ">
                    <span className="mt-[3px]">+</span>
                  </div>
                  <div className="font-DanaDemiBold">1</div>
                  <div className="bg-blue-600 w-7 h-7 flex-center text-white rounded-full ">
                    <span className="mt-[3px]">-</span>
                  </div>
                </div>
                <div className="bg-blue-600 text-white p-1 rounded-md shadow-blue">
                  <svg className="w-5 h-5">
                    <use href="#trash"></use>
                  </svg>
                </div>
              </div>
            </div>
            <div className="pb-4">
              <div className="flex py-4 gap-x-2">
                <img
                  className="w-20 h-20"
                  src="./images/product/laptop-2.jpg"
                  alt="image"
                />
                <div className="flex flex-col justify-between">
                  <h3 className="text-zinc-700 dark:text-white font-DanaMedium text-sm line-clamp-2">
                    لپ تاپ لنوو 8 گیگابایت رم و 1 ترابایت حافظه
                  </h3>
                  <div className="">
                    <span className="text-teal-600 dark:text-emerald-500 text-xs font-DanaMedium">
                      14.500 تومان تخفیف
                    </span>
                    <div className="text-zinc-700 dark:text-white font-DanaDemiBold">
                      175,000{" "}
                      <span className="text-xs font-Dana tracking-tight">
                        تومان
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <div className="bg-blue-600 w-7 h-7 flex-center text-white rounded-full ">
                    <span className="mt-[3px]">+</span>
                  </div>
                  <div className="font-DanaDemiBold">1</div>
                  <div className="bg-blue-600 w-7 h-7 flex-center text-white rounded-full ">
                    <span className="mt-[3px]">-</span>
                  </div>
                </div>
                <div className="bg-blue-600 text-white p-1 rounded-md shadow-blue">
                  <svg className="w-5 h-5">
                    <use href="#trash"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between py-5 px-4">
          <a
            href="#"
            className="w-28 h-11 flex items-center justify-center bg-blue-600  text-white rounded-md"
          >
            ثبت سفارش
          </a>
          <div>
            <span className="text-xs text-gray-300 tracking-tight font-DanaMedium">
              مبلغ قابل پرداخت
            </span>
            <div className="text-zinc-700 dark:text-white font-DanaDemiBold">
              175,000{" "}
              <span className="text-xs font-Dana tracking-tight">تومان</span>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={closeMenu}
        className="hide-menu overlay fixed inset-0 bg-black/50 z-40 transition-all"
        ref={overlayRef}
      ></div>
    </>
  );
}

export default Navbar;
