import React, { useEffect } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import FooterMenu from "../../Components/FooterMenu/FooterMenu";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import LastBlogBox from "../../Components/LastBlogBox/LastBlogBox";
import PageTitle from "../../Components/UserPanel/PageTitle/PageTitle";
import ArticleCommentBox from "../../Components/ArticleCommentBox/ArticleCommentBox";
import ArticleComment from "../../Components/ArticleComments/ArticleComment";
import TitleCat from "../../Components/TitleCat/TitleCat";
import RelatedArticle from "../../Components/RelatedArticle/RelatedArticle";
import { useParams } from "react-router-dom";
import useGetMain from "../../Hooks/AdminPanel/article/useGetMain";
import DOMPurify from "dompurify";

function ArticlePage() {
  const { articleName } = useParams();
  const { data: articleInfo, isLoading } = useGetMain(articleName);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container">
        <BreadCrumb
          links={[
            { id: 1, name: "خانه", to: "/" },
            { id: 2, name: "بلاگ", to: "/blog" },
            { id: 3, name: `${articleInfo?.articleInfo.title}`, to: "/" },
          ]}
        />
        <div className="flex items-start gap-6 mt-8 flex-col md:flex-row">
          <div className="w-full space-y-5">
            <div className="bg-white rounded-md shadow p-4">
              <PageTitle title={articleInfo?.articleInfo.title} />
              <div className="text-zinc-700 mt-3 text-xs md:text-sm font-DanaMedium flex items-center gap-x-2 md:gap-x-3">
                <div className="flex items-center gap-x-2">
                  <div className="w-11 h-11 bg-gray-100 rounded-full shadow flex-center shrink-0">
                    <img
                      src={`https://shoppingmilad.liara.run/uploads/covers/${articleInfo?.articleInfo.creator.image}`}
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                  <span>{articleInfo?.articleInfo.creator.name}</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <svg className="w-5 h-5 ">
                    <use href="#clock"></use>
                  </svg>
                  <span>{articleInfo?.articleInfo.date}</span>
                </div>
                <div className="hidden md:flex items-center gap-x-1">
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
                    {articleInfo?.articleInfo.readingTime}
                    <span className="hidden md:block"> زمان مطالعه</span>
                  </span>
                </div>
              </div>
              {/* start main section */}
              <section
                className="article-content mt-8"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(articleInfo?.articleInfo.desc),
                }}
              ></section>
            </div>
            <div className="bg-white rounded-md shadow p-4">
              <PageTitle title={"ارسال کامنت به مقاله فلان"} icon={"plane"} />
              <ArticleComment />
            </div>
            <div className="bg-white rounded-md shadow p-4">
              <PageTitle
                title={"2 دیدگاه برای این محصول"}
                icon={"chat-bubble-left-right"}
              />
              <ArticleCommentBox />
            </div>
          </div>
          <div className="w-[450px] sticky top-0 bg-white pb-5 rounded-md shadow space-y-7 p-3">
            <PageTitle icon={"article"} title={"آخرین مطالب"} />
            {articleInfo?.lastArticles.map((lastArticle) => (
              <LastBlogBox lastArticle={lastArticle} />
            ))}
          </div>
        </div>
        <div className="py-5">
          <TitleCat link={""} main={"مطالب مرتبط"} desc={" وبلاگ"} />
        </div>
      </div>
      {/* <RelatedArticle /> */}
      <Footer />
      <FooterMenu />
    </>
  );
}

export default ArticlePage;
