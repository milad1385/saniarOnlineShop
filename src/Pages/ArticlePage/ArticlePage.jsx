import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import FooterMenu from "../../Components/FooterMenu/FooterMenu";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import LastBlog from "../../Components/LastBlog/LastBlog";
import LastBlogBox from "../../Components/LastBlogBox/LastBlogBox";
import PageTitle from "../../Components/UserPanel/PageTitle/PageTitle";

function ArticlePage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container">
        <BreadCrumb
          links={[
            { id: 1, name: "خانه", to: "/" },
            { id: 2, name: "بلاگ", to: "/blog" },
            { id: 3, name: "مقاله فلان", to: "/" },
          ]}
        />
        <div className="flex gap-6 mt-8 flex-col md:flex-row">
          <div className="w-full space-y-5">
            <div className="bg-white rounded-md shadow p-4">
              <PageTitle title={"عنوان مطلب وبلاگ"} />
              <div className="text-zinc-700 mt-3 text-xs md:text-sm font-DanaMedium flex items-center gap-x-3">
                <div className="flex items-center gap-x-2">
                  <div className="w-11 h-11 bg-gray-100 rounded-full shadow flex-center shrink-0">
                    <img
                      src="/images/user.png"
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                  <span>میلاد سلامیان</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <svg className="w-5 h-5 ">
                    <use href="#clock"></use>
                  </svg>
                  <span>19 خرداد 1402</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <svg className="w-5 h-5 ">
                    <use href="#chat-bubble-left-right"></use>
                  </svg>
                  <span>4</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <svg className="w-5 h-5 ">
                    <use href="#eye"></use>
                  </svg>
                  <span className="flex gap-x-1">
                    5 دقیقه{" "}
                    <span className="hidden md:block"> زمان مطالعه</span>
                  </span>
                </div>
              </div>
              {/* start main section */}
              <section className="article-content mt-8">
                <h3>کیفیت ساخت لپ تاپ ایسوس تاف</h3>
                <p>
                  به عنوان گوشی‌ای که قیمت خیلی زیادی ندارد، باید به این موضوع
                  اشاره کنیم که داخل بسته بندی Redmi 9A آیتم‌های خاصی دیده نمی
                  شود. دفترچه راهنما، ابزار خارج کردن سیم کارت و شارژ ۱۰ واتی را
                  به همراه کابل USB مشاهده می‌کنید. این گوشی شیائومی در ابعاد
                  ۱۶۴.۹ در ۷۷.۱ در ۹ میلی متر ساخته شده و وزن آن هم ۱۹۶ گرم است.
                  در حال کلی باید به این موضوع اشاره کنیم که این گوشی خیلی خوب
                  در دست قرار میگیرد. قاب این گوشی بافت جالب توجهی دارد و به
                  همین دلیل خیلی خوب داخل دست قرار میگیرد. البته باید به این
                  موضوع اشاره کنیم که قاب پشتی گوشی خیلی زود اثر انگشت را به خود
                  جلب می‌کند. قاب پشتی که به صورت مات طراحی شده میزبان
                  دوربین‌های پشت است و به جز دوربین‌ها چیزی روی آن قرار نگرفته
                  است. به همین دلیل گوشی بسیار ساده به نظر می‌رسد. زمانی که به
                  گوشی نگاه می‌کنید، متوجه می‌شوید که صفحه نمایش آن حاشیه‌های
                  بسبتا بزرگی دارد. البته که با توجه به قیمت ارزان این گوشی
                  نیاید انتظار زیادی از این محصول داشته باشید. روی صفحه نمایش
                  ناچ قطره‌ ای قرار گرفته که داخل آن دوربین سلفی دیده می‌شود.
                  روی لبه بالای گوشی جک ۳.۵ میلی صدا قرار گرفته و روی لبه پایین
                  هم پورت micro-USB و اسپیکر گوشی و میکروفن را مشاهده می‌کنید.
                  خیلی دوست داشتیم که روی این گوشی پورت USB C مشاهده می کردیم.
                  روی لبه سمت چپ گوشی محل قرار گرفتن سیم کارت و کارت حافظه را
                  مشاهده می‌کنید. همچنین باید به این موضوع اشاره کنیم که این
                  گوشی در سه رنگ آبی و سبز و مشکی راهی بازار شده است.
                </p>
                <img src="/images/image.jpg" alt="" className="rounded-md" />
              </section>
            </div>
            <div className="bg-white rounded-md shadow p-4">
              <PageTitle title={'2 دیدگاه برای این محصول'} icon={'chat-bubble-left-right'}/>
            </div>
          </div>
          <div className="w-[450px] sticky top-0 bg-white h-[716.7px] rounded-md shadow space-y-7 p-3">
            <PageTitle icon={"article"} title={"آخرین مطالب"} />
            <LastBlogBox />
            <LastBlogBox />
            <LastBlogBox />
            <LastBlogBox />
            <LastBlogBox />
            <LastBlogBox />
            <LastBlogBox />
          </div>
        </div>
      </div>
      <Footer />
      <FooterMenu />
    </>
  );
}

export default ArticlePage;
