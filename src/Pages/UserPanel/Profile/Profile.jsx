import React from "react";
import PageTitle from "../../../Components/UserPanel/PageTitle/PageTitle";
import { Link } from "react-router-dom";
import Button from "../../../Components/Button/Button";

function Profile() {
  return (
    <div>
      <PageTitle icon={"home"} title={"پروفایل من"} />
      <form id="edit-account-info" className="p-3.5 pt-8">
        <div className="relative mb-11 md:flex-center">
          <img
            src="/images/user.png"
            className="w-32 md:w-44 h-32 md:h-44 rounded-full"
          />
          <Link
            to={"/"}
            className="absolute bottom-0 right-0 md:right-[428px] flex-center w-10 md:w-14 h-10 md:h-14 rounded-full bg-blue-600  border-2 md:border-4 border-white  cursor-pointer transition-colors"
          >
            <svg className="w-5 md:w-6 h-5 md:h-6 text-white">
              <use href="#arrow-path-rounded-square"></use>
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 child:flex child:flex-col">
          <div>
            <label
              for="email"
              className="font-DanaDemiBold text-base text-zinc-700 dark:text-white"
            >
              شماره همراه
            </label>
            <input
              type="text"
              className="mt-3.5 md:mt-4 py-3 px-3 rounded-md outline-none"
              id="phone"
              name="phone"
              required=""
            />
          </div>
          <div>
            <label
              for="first_name"
              className="font-DanaDemiBold text-base text-zinc-700 dark:text-white"
            >
              نام
            </label>
            <input
              type="text"
              className="mt-3.5 md:mt-4 py-3 px-3 rounded-md outline-none"
              id="first_name"
              name="first_name"
              required=""
            />
          </div>
          <div>
            <label
              for="last_name"
              className="font-DanaDemiBold text-base text-zinc-700 dark:text-white"
            >
              نام خانوادگی
            </label>
            <input
              type="text"
              className="mt-3.5 md:mt-4 py-3 px-3 rounded-md outline-none"
              id="last_name"
              name="last_name"
            />
          </div>
          <div>
            <label
              for="email"
              className="font-DanaDemiBold text-base text-zinc-700 dark:text-white"
            >
              نام کاربری
            </label>
            <input
              type="email"
              className="mt-3.5 md:mt-4 py-3 px-3 rounded-md outline-none"
              id="user-name"
              name="user-name"
              required=""
            />
          </div>
          <div>
            <label
              for="email"
              className="font-DanaDemiBold text-base text-zinc-700 dark:text-white"
            >
              ایمیل
            </label>
            <input
              type="email"
              className="mt-3.5 md:mt-4 py-3 px-3 rounded-md outline-none"
              id="email"
              name="email"
              required=""
            />
          </div>
          <div>
            <label
              for="email"
              className="font-DanaDemiBold text-base text-zinc-700 dark:text-white"
            >
              کد ملی
            </label>
            <input
              type="text"
              className="mt-3.5 md:mt-4 py-3 px-3 rounded-md outline-none"
              id="national-number"
              name="national-number"
              required=""
            />
          </div>
        </div>
        <Button title={"ثبت اطلاعات"} icon={'edit'} className=" w-full md:w-auto mt-14" />
      </form>
    </div>
  );
}

export default Profile;
