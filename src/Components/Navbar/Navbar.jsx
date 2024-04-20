import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import useGetAll from "../../Hooks/AdminPanel/static/address/useGetAll";
import useMenu from "../../Hooks/AdminPanel/menu/useMenu";
import ProfileBox from "../Topbar/ProfileBox";
import MobileMenu from "./MobileMenu";
import MegaMenus from "./MegaMenus";
import MenuItem from "./MenuItem";

function Navbar() {
  const context = useContext(AppContext);
  const [isShowUserBox, setIsShowUserBox] = useState(false);
  const { data: info } = useGetAll();
  const { data: menus } = useMenu();

  return (
    <>
      <div className="hidden md:block shadow-lg p-5 bg-white sticky -top-1 z-30">
        <div className={`flex items-center justify-between container`}>
          <div>
            <ul className="flex items-center gap-x-6">
              <li className="pb-2 group">
                <Link
                  to={""}
                  className="flex items-center w-full relative gap-x-1.5 bg-blue-600 py-2 px-3 rounded-md text-white shadow-blue text-sm lg:text-sm xl:text-base"
                >
                  <svg className="w-6 h-6">
                    <use href="#bar"></use>
                  </svg>
                  مگا تب منو
                  {/* start mega menu codding */}
                  <MegaMenus />
                  {/* end mega menu codding */}
                </Link>
              </li>
              {/* start menus */}
              {menus?.map((menu) => (
                <MenuItem menu={menu} key={menu._id} />
              ))}
              {context?.userInfo?.role === "ADMIN" && (
                <li className="pb-2">
                  <Link
                    to={"/admin-panel"}
                    className="flex items-center gap-x-1.5 text-sm lg:text-sm xl:text-base"
                  >
                    پنل مدیریت
                  </Link>
                </li>
              )}
            </ul>
          </div>
          {/* finish menu */}

          {/* start info */}
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
              <span className="hidden xl:block">
                {info?.length ? info[0]?.instagram : ""}
              </span>
            </Link>
          </div>
          {/* finish menu */}
        </div>
      </div>
      {/* start mobile menu */}
      <MobileMenu />
      <div className="relative left-[1rem]">
        <ProfileBox
          isShowUserBox={isShowUserBox}
          image={context?.userInfo?.image}
          onShow={setIsShowUserBox}
        />
      </div>
    </>
  );
}

export default Navbar;
