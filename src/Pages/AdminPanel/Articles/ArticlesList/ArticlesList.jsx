import React, { useEffect, useState } from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";
import { Link } from "react-router-dom";
import useGetAll from "../../../../Hooks/AdminPanel/article/useGetAll";
import { getSearchParam } from "../../../../Utils/Funcs/utils";
import Pagination from "../../../../Components/Pagination/Pagination";
function ArticlesList() {
  const pageNum = getSearchParam("page");
  const [page, setPage] = useState(pageNum);
  const { data: articles, isLoading } = useGetAll(page);

  useEffect(() => {
    setPage(pageNum || 1);
  }, []);

  return (
    <div className="pb-6">
      <Table title={"لیست"} main={"مقاله ها"}>
        <table className="user-table mt-7">
          <thead className="">
            <tr className="child:font-Lalezar text-base md:text-xl bg-blue-600  text-white child:p-3 text-center">
              <td>شماره</td>
              <td>عنوان</td>
              <td>لینک</td>
              <td>دسته بندی</td>
              <td>خواندن</td>
              <td>وضعیت</td>
              <td>مشاهده</td>
              <td>حذف</td>
              <td>ویرایش</td>
            </tr>
          </thead>
          <tbody className="text-sm md:text-base">
            {articles?.articles.map((article, index) => (
              <tr className="child:p-4 text-center font-DanaMedium">
                <td
                  className={` text-white ${
                    article.isActive ? "bg-green-600" : "bg-red-600"
                  }`}
                >
                  {index + 1}
                </td>
                <td>{article.title}</td>
                <td>{article.link}</td>
                <td>{article.category.title}</td>
                <td>{article.readingTime}</td>
                <td>{article.isActive === 1 ? "منتشر شده" : "منتشر نشده"}</td>
                <td>
                  {article.isActive ? (
                    <svg className="w-6 h-6 mx-auto">
                      <use href="#check-mark"></use>
                    </svg>
                  ) : (
                    <Link
                      to={"draft"}
                      className="bg-yellow-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                    >
                      مشاهده
                    </Link>
                  )}
                </td>
                <td>
                  <button className="bg-red-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    حذف
                  </button>
                </td>
                <td>
                  <button className="bg-blue-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    ویرایش
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Table>
      <Pagination
        count={articles?.paginatedNumber}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

export default ArticlesList;
