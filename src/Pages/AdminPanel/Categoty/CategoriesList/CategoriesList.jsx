import React, { useEffect, useState } from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";
import Pagination from "../../../../Components/Pagination/Pagination";
import useGetAll from "../../../../Hooks/AdminPanel/Category/useGetAll";
import EmptyError from "../../../../Components/UserPanel/EmptyError/EmptyError";

function CategoriesList() {
  const pageNum = new URLSearchParams(window.location.search).get("page");
  const [page, setPage] = useState(pageNum);
  const [msg, setMsg] = useState(null);

  const { data: categories } = useGetAll(page);

  useEffect(() => {
    setPage(pageNum || 1);
  }, [pageNum]);
  return (
    <>
      <div className="pb-6">
        <Table title={"لیست"} main={"دسته بندی ها"}>
          <table className="user-table mt-7">
            <thead className="">
              <tr className="child:font-Lalezar text-base md:text-xl bg-blue-600  text-white child:p-3 text-center">
                <td>شماره</td>
                <td>تصویر</td>
                <td>عنوان</td>
                <td>تاریخ</td>
                <td>لینک</td>
                <td>حذف</td>
                <td>ویرایش</td>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              {categories?.categories.length ? (
                categories?.categories.map((category , index) => (
                  <tr className="child:p-4 text-center font-DanaMedium">
                    <td>{index +1}</td>
                    <td>
                      <img
                        src={`http://localhost:3001/uploads/covers/${category.image}`}
                        className="w-[65px] md:w-[80px] mx-auto"
                      />
                    </td>
                    <td>{category.title}</td>
                    <td>{category.date}</td>
                    <td>{category.link}</td>
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
                ))
              ) : (
                <div className="mt-8">
                  <EmptyError msg={"هیج دسته بندی در سایت وجود ندارد"} />
                </div>
              )}
            </tbody>
          </table>
        </Table>
        <Pagination
          count={categories?.paginatedNumber}
          page={page}
          setPage={setPage}
        />
      </div>
    </>
  );
}

export default CategoriesList;
