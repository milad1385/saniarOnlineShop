import React, { useContext, useEffect } from "react";
import { isLogin } from "../../Utils/Funcs/utils";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";

function ProfileBox({ isShowUserBox, image, onShow }) {
  const context = useContext(AppContext);
  const path = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    onShow(false);
  }, [path]);
  return (
    <>
      <div
        className={`${
          isShowUserBox ? "visible opacity-100" : "invisible opacity-0 absolute"
        } bg-white`}
      >
        <div
          class="absolute left-0 top-full pt-4 z-50 transition-all"
          id="user-profile-dropdown"
        >
          <div class="w-[278px] bg-white dark:bg-darker border border-neutral-100 dark:border-0 p-5 pb-3.5 rounded-xl">
            <div class="flex items-center border-b border-b-neutral-200 dark:border-b-white/5 pb-5 mb-2">
              <Link to={"/my-account"} class="shrink-0">
                <img
                  src={
                    isLogin()
                      ? `https://shoppingmilad.liara.run/uploads/covers/${
                          image ? image : "user.png"
                        }`
                      : "https://secure.gravatar.com/avatar/0baa9781d23d690075258d90a6e02453?s=96&amp;d=mm&amp;r=g"
                  }
                  class="object-cover w-14 h-14 rounded-full inline-block"
                  loading="lazy"
                />
              </Link>
              <div class="mr-3.5 flex flex-col gap-y-3 overflow-hidden">
                <span class="font-DanaDemiBold inline-block truncate">
                  {context?.userInfo?.name}
                </span>
              </div>
            </div>

            <Link
              to={"/my-account"}
              class="flex items-center justify-between px-2.5 h-12 rounded-lg hover:text-white hover:bg-blue-600 transition-colors"
            >
              <span class="flex items-center gap-x-2">
                <svg class="w-6 h-6">
                  <use href="#home"></use>
                </svg>
                پیشخوان{" "}
              </span>
            </Link>
            <Link
              to={"/my-account/Favorite"}
              class="flex items-center justify-between px-2.5 h-12 rounded-lg hover:text-white hover:bg-blue-600 transition-colors"
            >
              <span class="flex items-center gap-x-2">
                <svg class="w-6 h-6">
                  <use href="#heart"></use>
                </svg>
                علاقه مندی ها
              </span>
            </Link>
            <Link
              to={"/my-account/tickets"}
              class="flex items-center justify-between px-2.5 h-12 rounded-lg hover:text-white hover:bg-blue-600 transition-colors"
            >
              <span class="flex items-center gap-x-2">
                <svg class="w-6 h-6">
                  <use href="#chat-bubble-left-right"></use>
                </svg>
                تیکت ها{" "}
              </span>
            </Link>
            <Link
              to={"/my-account/profile"}
              class="flex items-center justify-between px-2.5 h-12 rounded-lg hover:text-white hover:bg-blue-600 transition-colors"
            >
              <span class="flex items-center gap-x-2">
                <svg class="w-6 h-6">
                  <use href="#user"></use>
                </svg>
                جزئیات حساب{" "}
              </span>
            </Link>

            <div class="mt-2 pt-2 border-t border-t-neutral-200 dark:border-t-white/5">
              <span
                onClick={() => {
                  context?.logout();
                  navigate("/");
                }}
                class="flex items-center justify-between px-2.5 h-12 rounded-lg hover:text-white hover:bg-red-500 transition-colors"
              >
                <span class="flex items-center gap-x-2">
                  <svg class="w-6 h-6">
                    <use href="#power"></use>
                  </svg>
                  خروج
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => onShow(false)}
        className={`hide-menu ${
          isShowUserBox ? "visible opacity-100" : "invisible opacity-0"
        }  overlay fixed inset-0 bg-black/50 z-40 transition-all`}
      ></div>
    </>
  );
}

export default ProfileBox;
