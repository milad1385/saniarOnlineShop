import React from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";

function LogoAndIcon() {
  return (
    <div className="pb-6">
      <Table title={"لیست"} main={"لوگو و آیکون"}>
        <table className="user-table mt-7">
          <thead className="">
            <tr className="child:font-Lalezar text-base md:text-xl bg-blue-600  text-white child:p-3 text-center">
              <td>شماره</td>
              <td>لوگو</td>
              <td>فاو آیکون</td>
              <td>وضعیت</td>
              <td>حذف</td>
            </tr>
          </thead>
          <tbody className="text-sm md:text-base">
            <tr className="child:p-4 text-center font-DanaMedium">
              <td>1</td>
              <td>
                <img
                  src="/images/logo.png"
                  alt="history"
                  class="w-[135px] mx-auto"
                />
              </td>
              <td>
                <img
                  src="/images/category/fast.png"
                  alt="history"
                  class="w-[50px] mx-auto"
                />
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

export default LogoAndIcon;
