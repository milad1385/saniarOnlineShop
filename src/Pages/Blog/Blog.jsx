import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import TitleCat from "../../Components/TitleCat/TitleCat";
import LastBlog from "../../Components/LastBlog/LastBlog";
import Footer from "../../Components/Footer/Footer";
import FooterMenu from "../../Components/FooterMenu/FooterMenu";
import LastVedio from "../../Components/LastVedio/LastVedio";
import ArticleBox from "../../Components/ArticleBox/ArticleBox";
import useGetWithOutPagination from "../../Hooks/AdminPanel/article/useGetWithOutPagination";

function Blog() {
  const { data: articles, isLoading } = useGetWithOutPagination();
  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="container">
        <BreadCrumb
          links={[
            { id: 1, name: "خانه", to: "/" },
            { id: 2, name: "وبلاگ", to: "/" },
            { id: 3, name: "مقاله ها", to: "/" },
          ]}
        />
        <div className="flex  gap-x-5 mb-5">
          <div className="hidden lg:block w-[480px] bg-white shadow  rounded-md p-4 sticky top-0">
            <div className="bg-gray-100 flex items-center justify-between p-1.5 rounded-full">
              <input
                placeholder="نام مقاله را بنویسید..."
                className="border-none w-full outline-none bg-gray-100 p-1 rounded-full"
              />
              <button className="bg-blue-600 text-white flex-center rounded-full p-3">
                <svg className="w-5 h-5">
                  <use href="#magni-glass"></use>
                </svg>
              </button>
            </div>
            <ul className="space-y-4 mt-4 child:transition-all hover:child:bg-blue-500 hover:child:text-white child:rounded-md">
              <li className="group">
                <a
                  className="flex  gap-x-2 font-DanaMedium p-2 rounded-md"
                  href="/my-account/profile"
                >
                  <svg className="w-6 h-6 text-zinc-600 group-hover:text-white">
                    <use href="#home"></use>
                  </svg>
                  جدید ترین مطالب
                </a>
              </li>
              <li className="group">
                <a
                  className="flex  gap-x-2 font-DanaMedium p-2 rounded-md"
                  href="/my-account/orders"
                >
                  <svg className="w-6 h-6 text-zinc-600 group-hover:text-white">
                    <use href="#shop-card"></use>
                  </svg>
                  علم و تکنولوژی
                </a>
              </li>
              <li className="group">
                <a
                  className="flex  gap-x-2 font-DanaMedium p-2 rounded-md"
                  href="/my-account/address"
                >
                  <svg className="w-6 h-6 text-zinc-600 group-hover:text-white">
                    <use href="#game"></use>
                  </svg>
                  بازی ویدیویی
                </a>
              </li>
              <li className="group">
                <a
                  className="flex  gap-x-2 font-DanaMedium p-2 rounded-md"
                  href="/my-account/notifications"
                >
                  <svg className="w-6 h-6 text-zinc-600 group-hover:text-white">
                    <use href="#book"></use>
                  </svg>
                  کتاب و ادبیات
                </a>
              </li>
              <li className="group">
                <a
                  className="flex  gap-x-2 font-DanaMedium p-2 rounded-md"
                  href="/my-account/comments"
                >
                  <svg className="w-6 h-6 text-zinc-600 group-hover:text-white">
                    <use href="#movie"></use>
                  </svg>
                  هنر و سینما
                </a>
              </li>
              <li className="group">
                <a
                  className="flex  gap-x-2 font-DanaMedium p-2 rounded-md"
                  href="/my-account/Favorite"
                >
                  <svg className="w-6 h-6 text-zinc-600 group-hover:text-white">
                    <use href="#life-style"></use>
                  </svg>
                  سبک زندگی
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full rounded-md">
            <img
              src="/images/Banner/banner-1.jpg"
              alt="banner-1.jpg"
              className="rounded-xl shadow h-16 md:h-auto object-cover"
              vedio-prev
            />
            <div className="flex  justify-between flex-col md:flex-row gap-5 mt-5">
              <div className="relative">
                <img
                  src="/images/Banner/blog-1.jpg"
                  className="md:w-[280px] md:h-[285px] object-cover vedio-prev rounded-xl shadow"
                />
                <Link className=" text-white absolute left-2 right-2 bottom-2 rounded-md p-2">
                  <h3 className="text-sm font-DanaDemiBold">
                    انتخاب هارد اکسنترنال مناسب{" "}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-DanaDemiBold">
                      9 مرداد 1402
                    </span>
                    <svg className="w-6 h-6 text-blue-600">
                      <use href="#left-arrow"></use>
                    </svg>
                  </div>
                </Link>
              </div>
              <div className="relative">
                <img
                  src="/images/Banner/blog-2.jpg"
                  className="md:w-[527px] md:h-[285px] rounded-xl shadow"
                />
                <Link className=" text-white absolute left-2 right-2 bottom-2 rounded-md p-2">
                  <h3 className="text-sm font-DanaDemiBold">
                    بررسی سه پرچمدار شرکت شیائومی{" "}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-DanaDemiBold">
                      9 مرداد 1402
                    </span>
                    <svg className="w-6 h-6 text-blue-600">
                      <use href="#left-arrow"></use>
                    </svg>
                  </div>
                </Link>
              </div>
              <div className="relative">
                <img
                  src="/images/Banner/blog-4.jpg"
                  className="md:w-[280px] md:h-[285px] object-cover vedio-prev rounded-xl shadow"
                />
                <Link className=" text-white absolute left-2 right-2 bottom-2 rounded-md p-2">
                  <h3 className="text-sm font-DanaDemiBold">
                    انتخاب هارد اکسنترنال مناسب{" "}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-DanaDemiBold">
                      9 مرداد 1402
                    </span>
                    <svg className="w-6 h-6 text-blue-600">
                      <use href="#left-arrow"></use>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <TitleCat link={""} main={"پربازدید ترین مطالب"} desc={" وبلاگ"} />
      </div>
      <div className="mt-5">
        <LastBlog isBlog={true} />
      </div>
      <div className="container py-5">
        <TitleCat link={""} main={"آخرین ویدیوهای"} desc={" وبلاگ"} />
      </div>
      <div className="container flex gap-x-5">
        <div className="w-[343px] hidden md:block bg-white space-y-9 rounded-md shadow p-4">
          <LastVedio />
          <LastVedio />
          <LastVedio />
          <LastVedio />
          <LastVedio />
        </div>
        <div className="w-full rounded-md">
          <div className="flex  justify-between flex-col md:flex-row gap-5">
            <div className="relative">
              <img
                src="/images/Banner/blog-1.jpg"
                className="md:w-[280px] md:h-[285px] object-cover vedio-prev rounded-xl shadow"
              />
              <a
                className=" text-white absolute left-2 right-2 bottom-2 rounded-md p-2"
                href="/Blog"
              >
                <h3 className="text-base font-DanaDemiBold">
                  انتخاب هارد اکسنترنال مناسب{" "}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-DanaDemiBold">
                    9 مرداد 1402
                  </span>
                </div>
              </a>
            </div>
            <div className="relative">
              <img
                src="/images/Banner/blog-2.jpg"
                className="md:w-[527px] md:h-[285px] vedio-prev rounded-xl shadow"
              />
              <a
                className=" text-white absolute left-2 right-2 bottom-2 rounded-md p-2"
                href="/Blog"
              >
                <h3 className="text-base font-DanaDemiBold">
                  بررسی سه پرچمدار شرکت شیائومی{" "}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-DanaDemiBold">
                    9 مرداد 1402
                  </span>
                </div>
              </a>
            </div>
            <div className="relative">
              <img
                src="/images/Banner/blog-4.jpg"
                className="md:w-[280px] md:h-[285px] object-cover vedio-prev rounded-xl shadow"
              />
              <a
                className=" text-white absolute left-2 right-2 bottom-2 rounded-md p-2"
                href="/Blog"
              >
                <h3 className="text-base font-DanaDemiBold">
                  انتخاب هارد اکسنترنال مناسب{" "}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-DanaDemiBold">
                    9 مرداد 1402
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="relative">
              <img
                src="/images/blog/blog-8.jpg"
                className="object-cover vedio-prev rounded-xl shadow"
              />
              <a
                className=" text-white absolute left-2 right-2 bottom-2 rounded-md p-2"
                href="/Blog"
              >
                <h3 className="text-base font-DanaDemiBold">
                  انتخاب هارد اکسنترنال مناسب{" "}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-DanaDemiBold">
                    9 مرداد 1402
                  </span>
                </div>
              </a>
            </div>
            <div className="relative">
              <img
                src="/images/blog/blog-5.jpg"
                className="object-cover vedio-prev rounded-xl shadow"
              />
              <a
                className=" text-white absolute left-2 right-2 bottom-2 rounded-md p-2"
                href="/Blog"
              >
                <h3 className="text-base font-DanaDemiBold">
                  انتخاب هارد اکسنترنال مناسب{" "}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-DanaDemiBold">
                    9 مرداد 1402
                  </span>
                </div>
              </a>
            </div>
            <div className="relative">
              <img
                src="/images/blog/blog-6.jpg"
                className="object-cover vedio-prev rounded-xl shadow"
              />
              <a
                className=" text-white absolute left-2 right-2 bottom-2 rounded-md p-2"
                href="/Blog"
              >
                <h3 className="text-base font-DanaDemiBold">
                  انتخاب هارد اکسنترنال مناسب{" "}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-DanaDemiBold">
                    9 مرداد 1402
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <TitleCat link={""} main={"آخرین مطالب"} desc={" وبلاگ"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          {articles?.map((article) => (
            <ArticleBox article={article} key={crypto.randomUUID()} />
          ))}
        </div>
      </div>
      <Footer />
      <FooterMenu />
    </div>
  );
}

export default Blog;
