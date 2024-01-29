import React from "react";
import Table from "../../../Components/AdminPanel/Table/Table";

function Comments() {
  return (
    <div className="container">
      <div className="pb-6">
        <Table title={"لیست"} main={"کامنت ها"}>
          <table className="user-table mt-7">
            <thead className="">
              <tr className="child:font-Lalezar text-base md:text-xl bg-blue-600  text-white child:p-3 text-center">
                <td>شماره</td>
                <td>نام</td>
                <td>محصول</td>
                <td>تاریخ</td>
                <td>ساعت</td>
                <td>امتیاز</td>
                <td>نوع</td>
                <td>مشاهده</td>
                <td>تایید</td>
                <td>حذف</td>
                <td>ویرایش</td>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              <tr className="child:p-4 text-center font-DanaMedium">
                <td className="bg-red-600 text-white">1</td>
                <td>میلاد سلامیان</td>
                <td>لپ تاپ گیمینگ</td>
                <td>1402/11/10</td>
                <td>12:56</td>
                <td className="flex items-center justify-center gap-x-0.5">
                  <svg class="w-6 h-6 text-yellow-400">
                    <use href="#star"></use>
                  </svg>
                  <svg class="w-6 h-6 text-yellow-400">
                    <use href="#star"></use>
                  </svg>
                  <svg class="w-6 h-6 text-yellow-400">
                    <use href="#star"></use>
                  </svg>
                  <svg class="w-6 h-6 text-yellow-400">
                    <use href="#star"></use>
                  </svg>
                  <svg class="w-6 h-6 text-gray-400">
                    <use href="#star"></use>
                  </svg>
                </td>
                <td>اصلی</td>
                <td>
                  <button className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    مشاهده
                  </button>
                </td>
                <td>
                  <button className="bg-gray-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    تایید
                  </button>
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
                <td>میلاد سلامیان</td>
                <td>لپ تاپ گیمینگ</td>
                <td>1402/11/10</td>
                <td>16:42</td>
                <td className="flex items-center justify-center gap-x-0.5">
                  <svg class="w-6 h-6 text-yellow-400">
                    <use href="#star"></use>
                  </svg>
                  <svg class="w-6 h-6 text-yellow-400">
                    <use href="#star"></use>
                  </svg>
                  <svg class="w-6 h-6 text-yellow-400">
                    <use href="#star"></use>
                  </svg>
                  <svg class="w-6 h-6 text-yellow-400">
                    <use href="#star"></use>
                  </svg>
                  <svg class="w-6 h-6 text-gray-400">
                    <use href="#star"></use>
                  </svg>
                </td>
                <td>رپلای</td>
                <td>
                  <button className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    مشاهده
                  </button>
                </td>
                <td>
                  <button className="bg-gray-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    تایید
                  </button>
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
                <td className="bg-red-600 text-white">3</td>
                <td>میلاد سلامیان</td>
                <td>لپ تاپ گیمینگ</td>
                <td>1402/11/10</td>
                <td>23:56</td>
                <td className="flex items-center justify-center gap-x-0.5">
                  <svg class="w-6 h-6 text-yellow-400">
                    <use href="#star"></use>
                  </svg>
                  <svg class="w-6 h-6 text-yellow-400">
                    <use href="#star"></use>
                  </svg>
                  <svg class="w-6 h-6 text-yellow-400">
                    <use href="#star"></use>
                  </svg>
                  <svg class="w-6 h-6 text-yellow-400">
                    <use href="#star"></use>
                  </svg>
                  <svg class="w-6 h-6 text-gray-400">
                    <use href="#star"></use>
                  </svg>
                </td>
                <td>اصلی</td>
                <td>
                  <button className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    مشاهده
                  </button>
                </td>
                <td>
                  <button className="bg-gray-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    تایید
                  </button>
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
                <td className="bg-green-600 text-white">4</td>
                <td>میلاد سلامیان</td>
                <td>لپ تاپ گیمینگ</td>
                <td>1402/11/10</td>
                <td>01:12</td>
                <td className="flex items-center justify-center gap-x-0.5">
                  <svg class="w-6 h-6 text-yellow-400">
                    <use href="#star"></use>
                  </svg>
                  <svg class="w-6 h-6 text-yellow-400">
                    <use href="#star"></use>
                  </svg>
                  <svg class="w-6 h-6 text-yellow-400">
                    <use href="#star"></use>
                  </svg>
                  <svg class="w-6 h-6 text-yellow-400">
                    <use href="#star"></use>
                  </svg>
                  <svg class="w-6 h-6 text-gray-400">
                    <use href="#star"></use>
                  </svg>
                </td>
                <td>رپلای</td>
                <td>
                  <button className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    مشاهده
                  </button>
                </td>
                <td>
                  <button className="bg-gray-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    تایید
                  </button>
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
    </div>
  );
}

export default Comments;
