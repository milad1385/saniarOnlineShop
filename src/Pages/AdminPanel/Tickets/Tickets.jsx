import React from "react";
import Table from "../../../Components/AdminPanel/Table/Table";

function Tickets() {
  return (
    <div className="container">
      <div className="pb-6">
        <Table title={"لیست"} main={"تیکت ها"}>
          <table className="user-table mt-7">
            <thead className="">
              <tr className="child:font-Lalezar text-base md:text-xl bg-blue-600  text-white child:p-3 text-center">
                <td>شماره</td>
                <td>کاربر</td>
                <td>عنوان</td>
                <td>نوع تیکت</td>
                <td>محصول</td>
                <td>اولویت</td>
                <td>مشاهده</td>
                <td>پاسخ</td>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              <tr className="child:p-4 text-center font-DanaMedium">
                <td className="bg-red-600 text-white">1</td>
                <td>میلاد سلامیان</td>
                <td>خرابی لینک دانلود</td>
                <td>پشتیبانی</td>
                <td>-------</td>
                <td>مهم</td>
                <td>
                  <button className="bg-blue-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    مشاهده
                  </button>
                </td>
                <td>
                  <button className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    پاسخ
                  </button>
                </td>
              </tr>
              <tr className="child:p-4 text-center font-DanaMedium">
                <td className="bg-green-600 text-white">2</td>
                <td>میلاد سلامیان</td>
                <td>خرابی لینک دانلود</td>
                <td>پشتیبانی</td>
                <td>-------</td>
                <td>مهم</td>
                <td>
                  <button className="bg-blue-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    مشاهده
                  </button>
                </td>
                <td>
                  <button className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    پاسخ
                  </button>
                </td>
              </tr>
              <tr className="child:p-4 text-center font-DanaMedium">
                <td className="bg-red-600 text-white">3</td>
                <td>میلاد سلامیان</td>
                <td>خرابی لینک دانلود</td>
                <td>پشتیبانی</td>
                <td>-------</td>
                <td>مهم</td>
                <td>
                  <button className="bg-blue-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    مشاهده
                  </button>
                </td>
                <td>
                  <button className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    پاسخ
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

export default Tickets;
