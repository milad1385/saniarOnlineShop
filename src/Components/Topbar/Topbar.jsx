import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import useGetAllPro from "../../Hooks/AdminPanel/Product/useGetAllPro";
import { isLogin } from "../../Utils/Funcs/utils";
import useBasket from "../../Hooks/basket/useBasket";
import ProfileBox from "./ProfileBox";

function Topbar() {
  const context = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [isShowSearch, setIsShowSearch] = useState(false);
  const [searchedProduct, setSearchedProduct] = useState([]);
  const [isShowUserBox, setIsShowUserBox] = useState(false);
  const navigate = useNavigate();
  const overlayRef = useRef(null);

  const { data: products } = useGetAllPro();
  const { data: baskets } = useBasket();

  useEffect(() => {
    setAllProducts(products);
    const hideOverlayHandler = (e) => {
      if (e.target.id === "overlay") {
        overlayRef.current.classList.add("hide-menu");
        setSearch("");
        setIsShowSearch(false);
      }
    };

    document.addEventListener("click", hideOverlayHandler);

    return () => document.removeEventListener("click", hideOverlayHandler);
  }, [products]);

  const searchHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value) {
      setIsShowSearch(true);
      const allProductsCopy = allProducts.slice();
      const searchedProducts = allProductsCopy.filter((product) =>
        product.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchedProduct(searchedProducts);
    } else {
      setIsShowSearch(false);
    }
  };
  return (
    <div className="hidden md:block  pb-1 bg-white relative z-40">
      <div className="py-[30px] flex items-center justify-between container ">
        <div className="flex relative items-center justify-between gap-x-6">
          <img
            src="/images/logo.png"
            className="w-[170px] xl:w-[220px] select-none"
            alt="logo"
          />
          <div className="flex items-center border border-gray-200  lg:w-[350px] xl:w-[500px] bg-gray-100 py-[5px] px-[5px] text-base rounded-full justify-between">
            <input
              type="text"
              className="border-none outline-none w-full px-[px] bg-gray-100"
              placeholder="جستجو محصولات"
              value={search}
              onChange={(e) => searchHandler(e)}
            />
            <button
              className="bg-blue-600 text-white p-2 flex items-center justify-center rounded-full shadow-blue"
              onClick={() => {
                navigate(`/search/${search}`);
              }}
            >
              <svg className="w-6 h-6">
                <use href="#magni-glass"></use>
              </svg>
            </button>
          </div>
          <div
            className={`${
              isShowSearch ? "opacity-100 visible" : "opacity-0 invisible"
            } absolute z-50 left-0 flex items-center border border-gray-200  lg:w-[350px] xl:w-[500px] bg-white py-[5px] px-[5px] text-base rounded-t-2xl justify-between`}
          >
            <input
              type="text"
              className="border-none outline-none w-full px-[px] bg-white"
              placeholder="جستجو محصولات"
              value={search}
              onChange={(e) => searchHandler(e)}
            />
            <button className="bg-blue-600 text-white p-2 flex items-center justify-center rounded-full shadow-blue">
              <svg className="w-6 h-6">
                <use href="#magni-glass"></use>
              </svg>
            </button>
            <div
              className={`absolute z-50 left-0 bg-white w-full rounded-b-md top-[56px] py-2 px-2`}
            >
              <ul className="child:cursor-pointer">
                {searchedProduct.length ? (
                  searchedProduct.map((item) => (
                    <li
                      className="flex items-center justify-between hover:bg-blue-600 hover:text-white p-2 transition-all rounded-sm"
                      onClick={() => {
                        setSearch(item.title);
                        setIsShowSearch(false);
                      }}
                    >
                      <span>{item.title}</span>
                      <svg className="w-5 h-5">
                        <use href="#arrow-top"></use>
                      </svg>
                    </li>
                  ))
                ) : (
                  <div class="notfound">
                    <img
                      src="./../images/download.svg"
                      width="200px"
                      className="mx-auto mb-10"
                    />
                    <p className="flex items-center justify-center mb-4">
                      نتیجه‌ای برای جستجوی شما پیدا نشد.
                    </p>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="text-lg flex items-center gap-x-1.5">
          <div className="flex items-center gap-x-2 shadow-gray border border-gray-200 py-3 px-3 rounded-3xl">
            <svg className="w-6 h-6">
              <use href="#user"></use>
            </svg>
            {isLogin() ? (
              <Link
                to={"/my-account"}
                className="hidden xl:block text-sm font-DanaMedium"
              >
                {context?.userInfo?.name}
              </Link>
            ) : (
              <Link
                to={"/login"}
                className="hidden xl:block text-sm font-DanaMedium"
              >
                ثبت نام | ورود
              </Link>
            )}
          </div>
          <Link
            to={`${isLogin() ? "/order/card" : "/"}`}
            className="flex items-center gap-x-4 shadow-gray border border-gray-200 py-3 xl:py-2 px-3 rounded-full xl:rounded-3xl"
          >
            <svg className="w-6 h-6">
              <use href="#shop"></use>
            </svg>
            <div className="hidden xl:flex bg-blue-600 shadow-blue text-white  items-center justify-center rounded-full xl:w-[30px] xl:h-[30px] text-sm">
              {baskets?.length || 0}
            </div>
          </Link>
          <div className="bg-gray-100 rounded-full p-0.5 relative">
            <img
              onClick={() => setIsShowUserBox(true)}
              src={
                isLogin()
                  ? `https://shoppingmilad.liara.run/uploads/covers/${context?.userInfo?.image}`
                  : "/images/user.png"
              }
              className="w-[56px] h-[56px] rounded-full relative z-50"
            />

            <ProfileBox
              isShowUserBox={isShowUserBox}
              image={context?.userInfo?.image}
              onShow={setIsShowUserBox}
            />
          </div>
        </div>
      </div>

      <div
        id="overlay"
        className={`${
          isShowSearch  ? "active-menu" : "hide-menu"
        } overlay fixed inset-0 bg-black/50 z-30 transition-all`}
        ref={overlayRef}
      ></div>
    </div>
  );
}

export default Topbar;
