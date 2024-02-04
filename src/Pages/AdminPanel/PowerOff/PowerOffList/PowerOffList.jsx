import React from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";

function PowerOffList() {
  return (
    <div className="pb-6">
      <Table title={"وضعیت"} main={"سایت"}>
        <table className="user-table mt-7">
          <thead className="">
            <tr className="child:font-Lalezar text-base md:text-xl bg-blue-600  text-white child:p-3 text-center">
              <td>شماره</td>
              <td>عنوان</td>
              <td>تاریخ</td>
              <td>وضعیت</td>
              <td>ویرایش</td>
            </tr>
          </thead>
          <tbody className="text-sm md:text-base">
            <tr className="child:p-4 text-center font-DanaMedium">
              <td className="bg-green-600 text-white">1</td>
              <td>
                <button className="bg-blue-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                  مشاهده
                </button>
              </td>
              <td>1402/05/07</td>
              <td>
                روشن
              </td>
              <td>
                <button className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
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

export default PowerOffList;
