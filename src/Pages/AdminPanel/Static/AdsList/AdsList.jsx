import React from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";

function AdsList() {
  return (
    <div className="pb-6">
      <Table title={"لیست"} main={"شعار ها"}>
        <table className="user-table mt-7">
          <thead className="">
            <tr className="child:font-Lalezar text-base md:text-xl bg-blue-600  text-white child:p-3 text-center">
              <td>شماره</td>
              <td>لوگو</td>
              <td>عنوان</td>
              <td>توضیحات</td>
              <td>وضعیت</td>
              <td>حذف</td>
              <td>ویرایش</td>
            </tr>
          </thead>
          <tbody className="text-sm md:text-base">
            <tr className="child:p-4 text-center font-DanaMedium">
              <td>1</td>
              <td>
                <img
                  src="/images/category/credit-card.png"
                  alt="history"
                  class="w-[50px] mx-auto"
                />
              </td>
              <td>سلام خوبی ؟</td>
              <td>آره خوبم </td>
              <td>
                <button className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
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
  );
}

export default AdsList;
