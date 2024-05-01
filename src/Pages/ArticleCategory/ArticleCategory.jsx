import React, { useEffect, useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import FooterMenu from "../../Components/FooterMenu/FooterMenu";
import Footer from "../../Components/Footer/Footer";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import ArticleBox from "../../Components/ArticleBox/ArticleBox";
import Pagination from "../../Components/Pagination/Pagination";
import useGetAll from "../../Hooks/AdminPanel/article/useGetAll";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import { getSearchParam } from "../../Utils/Funcs/utils";

function ArticleCategory() {
  const pageNum = getSearchParam("page");
  const [page, setPage] = useState(pageNum);

  useEffect(() => {
    setPage(pageNum || 1);
    window.scroll({ top: 0, left: 0 });
  }, [pageNum]);

  const { data, isLoading } = useGetAll();
  const { articleCategory } = useParams();

  if (isLoading) return <Loader />;
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container">
        <BreadCrumb
          links={[
            { id: 1, name: "خانه", to: "/" },
            { id: 2, name: "وبلاگ", to: "/" },
            {
              id: 3,
              name: `${articleCategory === "all" ? "همه" : articleCategory}`,
              to: "/",
            },
          ]}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          {data?.articles.map((article) => (
            <ArticleBox key={article._id} article={article} />
          ))}
        </div>
        <Pagination
          count={data?.paginatedNumber}
          page={page}
          setPage={setPage}
        />
      </div>
      <Footer />
      <FooterMenu />
    </>
  );
}

export default ArticleCategory;
