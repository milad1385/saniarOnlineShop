import React from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";

function AdvanceList() {
  return (
    <div className="pb-6">
      <Table title={"لیست"} main={"مشخصه ها"}>
        <table className="user-table mt-7">
          <thead className="">
            <tr className="child:font-Lalezar text-base md:text-xl bg-blue-600  text-white child:p-3 text-center">
              <td>شماره</td>
              <td>نام مشخصه</td>
              <td>مقدار مشخصه</td>
              <td>محصول</td>
              <td>تاریخ</td>
              <td>حذف</td>
              <td>ویرایش</td>
            </tr>
          </thead>
          <tbody className="text-sm md:text-base">
            <tr className="child:p-4 text-center font-DanaMedium">
              <td>1</td>
              <td>سایز بندی</td>
              <td>48 ، 49 ، 50</td>
              <td>کفش zx8000</td>
              <td>1402/11/10</td>
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
              <td>2</td>
              <td>بسته بندی</td>
              <td>سنتی ، عادی</td>
              <td>رومیزی</td>
              <td>1402/11/02</td>
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

export default AdvanceList;
