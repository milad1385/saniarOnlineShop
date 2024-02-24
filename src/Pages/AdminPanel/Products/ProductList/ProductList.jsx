import React, { useEffect, useState } from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";
import Pagination from "../../../../Components/Pagination/Pagination";
import useGetAll from "../../../../Hooks/AdminPanel/Product/useGetAll";
function ProductList() {
  const pageNum = new URLSearchParams(window.location.search).get("page");
  const [page, setPage] = useState(pageNum);
  useEffect(() => {
    setPage(pageNum || 1);
    console.log(pageNum);
  }, [pageNum]);

  const { data: products, isLoading } = useGetAll(page);
  return (
    <>
      <div className="pb-6">
        <Table title={"لیست"} main={"محصولات"}>
          <table className="user-table mt-7">
            <thead className="">
              <tr className="child:font-Lalezar text-base md:text-xl bg-blue-600  text-white child:p-3 text-center">
                <td>شماره</td>
                <td>عکس اصلی</td>
                <td>نام</td>
                <td>قیمت</td>
                <td>موجودی</td>
                <td>تخفیف</td>
                <td>لینک</td>
                <td>دسته بندی</td>
                <td>حذف</td>
                <td>جزییات</td>
                <td>ویرایش</td>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              {products?.products.map((product, index) => (
                <tr className="child:p-3 text-center font-DanaMedium">
                  <td>{index + 1}</td>
                  <td>
                    <div className="w-[70px] md:w-[85px]">
                      <img
                        src={`http://localhost:3001/uploads/covers/${product.images[0]}`}
                        className=""
                      />
                    </div>
                  </td>
                  <td>{product.title}</td>
                  <td>{product.price.toLocaleString("fa")}</td>
                  <td>{product.count}</td>
                  <td>{product.off ? product.off + `%` : "تخفیف ندارد"}</td>
                  <td>{product.link}</td>
                  <td>{product.category.title}</td>
                  <td>
                    <button className="bg-red-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                      حذف
                    </button>
                  </td>

                  <td>
                    <button className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                      جزییات
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
          count={products?.paginatedNumber}
          page={page}
          setPage={setPage}
        />
      </div>
    </>
  );
}

export default ProductList;
