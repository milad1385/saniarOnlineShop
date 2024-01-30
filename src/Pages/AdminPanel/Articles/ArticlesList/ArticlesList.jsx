import React from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";
import { Link } from "react-router-dom";
function ArticlesList() {
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
            <tr className="child:p-4 text-center font-DanaMedium">
              <td className="bg-red-600 text-white">1</td>
              <td>ری اکت یا ویو جی اس ؟</td>
              <td>react-vue</td>
              <td>تکنولوژی</td>
              <td>8 دقیقه</td>
              <td>پیش نویس</td>
              <td>
                <Link to={'draft'}>
                  <button className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    مشاهده
                  </button>
                </Link>
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
            <tr className="child:p-4 text-center font-DanaMedium">
              <td className="bg-green-600 text-white">2</td>
              <td>آیفون 15 خوبه یا نه ؟</td>
              <td>iphone-15</td>
              <td>موبایل</td>
              <td>12 دقیقه</td>
              <td>منتشر شده</td>
              <td>
                <svg className="w-6 h-6 mx-auto">
                  <use href="#check-mark"></use>
                </svg>
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
          </tbody>
        </table>
      </Table>
    </div>
  );
}

export default ArticlesList;
