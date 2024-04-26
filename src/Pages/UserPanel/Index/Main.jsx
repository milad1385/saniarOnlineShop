import React, { useContext, useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Topbar from "../../../Components/Topbar/Topbar";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import FooterMenu from "../../../Components/FooterMenu/FooterMenu";
import BreadCrumb from "../../../Components/BreadCrumb/BreadCrumb";
import { AppContext } from "../../../App";
import DeleteModal from "../../../Components/DeleteModal/DeleteModal";

function Main() {
  const [isShowExitModal, setIsShowExitModal] = useState(false);
  const navigate = useNavigate();
  const context = useContext(AppContext);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const showDeleteModal = () => setIsShowExitModal(true);
  const logoutHandler = () => {
    context?.logout?.();
    navigate("/");
  };
  return (
    <>
      <div>
        <Topbar />
        <Navbar isUserPanel={true} />
        <div className="container">
          <BreadCrumb
            links={[
              { id: 1, name: "خانه", to: "/" },
              { id: 2, name: "فروشگاه", to: "/products" },
              { id: 3, name: "پنل کاربری", to: "/my-account" },
            ]}
          />
          <div className="flex  gap-x-5">
            <div className="hidden lg:block w-[480px] h-[540px] bg-white shadow  rounded-md p-4 sticky top-0">
              <div className="flex items-center gap-x-4 border-b-2 border-b-gray-200 pb-2">
                <div className="bg-gray-100 w-[55px] h-[55px] flex-center rounded-full">
                  <img
                    src={`${
                      context?.userInfo?.image
                        ? `http://localhost:3001/uploads/covers/${context?.userInfo?.image}`
                        : "/images/user.png"
                    }`}
                    alt="user.png"
                    className="w-[50px] h-[50px] rounded-full"
                  />
                </div>
                <div className="flex  flex-col gap-y-1 font-DanaDemiBold">
                  <span className="text-blue-600">حساب کاربری من</span>
                  <span className="">{context?.userInfo?.name}</span>
                </div>
              </div>
              <ul className="space-y-2 py-3 border-b-2 border-b-gray-200">
                <li>
                  <NavLink
                    to={"/my-account/main"}
                    className="flex  gap-x-2 font-DanaMedium p-2 rounded-md"
                  >
                    <svg className="w-5 h-5 text-blue-600">
                      <use href="#home"></use>
                    </svg>
                    صفحه اصلی
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/my-account/profile"}
                    className="flex  gap-x-2 font-DanaMedium p-2 rounded-md"
                  >
                    <svg className="w-5 h-5 text-blue-600">
                      <use href="#user"></use>
                    </svg>
                    پروفایل
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/my-account/orders"}
                    className="flex  gap-x-2 font-DanaMedium p-2 rounded-md"
                  >
                    <svg className="w-5 h-5 text-blue-600">
                      <use href="#shop-card"></use>
                    </svg>
                    سفارش های من
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/my-account/address"}
                    className="flex  gap-x-2 font-DanaMedium p-2 rounded-md"
                  >
                    <svg className="w-5 h-5 text-blue-600">
                      <use href="#map"></use>
                    </svg>
                    آدرس های من
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/my-account/notifications"}
                    className="flex  gap-x-2 font-DanaMedium p-2 rounded-md"
                  >
                    <svg className="w-5 h-5 text-blue-600">
                      <use href="#bell"></use>
                    </svg>
                    پیام ها و اطلاعیه ها
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/my-account/comments"}
                    className="flex  gap-x-2 font-DanaMedium p-2 rounded-md"
                  >
                    <svg className="w-5 h-5 text-blue-600">
                      <use href="#msg"></use>
                    </svg>
                    نظرات من
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/my-account/Favorite"}
                    className="flex  gap-x-2 font-DanaMedium p-2 rounded-md"
                  >
                    <svg className="w-5 h-5 text-blue-600">
                      <use href="#heart"></use>
                    </svg>
                    محصولات مورد علاقه
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink
                    to={"/my-account/offs-code"}
                    className="flex  gap-x-2 font-DanaMedium p-2 rounded-md"
                  >
                    <svg className="w-5 h-5 text-blue-600">
                      <use href="#gift"></use>
                    </svg>
                    کد های تخفیف من
                  </NavLink>
                </li> */}
                <li>
                  <NavLink
                    to={"/my-account/tickets"}
                    className="flex  gap-x-2 font-DanaMedium p-2 rounded-md"
                  >
                    <svg className="w-5 h-5 text-blue-600">
                      <use href="#ticket"></use>
                    </svg>
                    تیکت های من
                  </NavLink>
                </li>
              </ul>
              <div className="mt-2 cursor-pointer" onClick={showDeleteModal}>
                <span
                  to={"/"}
                  className="flex  gap-x-2 font-DanaMedium p-2 rounded-md"
                >
                  <svg className="w-5 h-5 text-blue-600">
                    <use href="#exit"></use>
                  </svg>
                  خروج
                </span>
              </div>
            </div>
            <div className="w-full rounded-md">
              <Outlet />
            </div>
          </div>
        </div>

        <Footer />
        <FooterMenu />
      </div>
      {isShowExitModal && (
        <DeleteModal
          title={"آیا از خروج اطمینان دارید ؟"}
          onClose={setIsShowExitModal}
          onClick={logoutHandler}
        ></DeleteModal>
      )}
    </>
  );
}

export default Main;
