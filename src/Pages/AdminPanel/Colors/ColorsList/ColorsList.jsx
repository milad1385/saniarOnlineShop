import React from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";

function ColorsList() {
  return (
    <div className="pb-6">
      <Table title={"لیست"} main={"رنگ ها"}>
        <table className="user-table mt-7">
          <thead className="">
            <tr className="child:font-Lalezar text-base md:text-xl bg-blue-600  text-white child:p-3 text-center">
              <td>شماره</td>
              <td>نام رنگ</td>
              <td>کد رنگ</td>
              <td>تاریخ ساخت</td>
              <td>سازنده</td>
              <td>حذف</td>
              <td>ویرایش</td>
            </tr>
          </thead>
          <tbody className="text-sm md:text-base">
            <tr className="child:p-4 text-center font-DanaMedium">
              <td>1</td>
              <td>قرمز</td>
              <td
                style={{
                  backgroundColor: "red",
                  color: "white",
                  direction: "ltr",
                }}
              >
                #f2f2f2
              </td>
              <td>1402/11/15</td>
              <td>میلاد سلامیان</td>
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
              <td>آبی</td>
              <td
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  direction: "ltr",
                }}
              >
                #f71234
              </td>
              <td>1402/11/15</td>
              <td>میلاد سلامیان</td>
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
              <td>3</td>
              <td>سبز</td>
              <td
                style={{
                  backgroundColor: "green",
                  color: "white",
                  direction: "ltr",
                }}
              >
                #f7f2f8
              </td>
              <td>1402/11/15</td>
              <td>مبینا سلامیان</td>
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
              <td>4</td>
              <td>مشکی</td>
              <td
                style={{
                  backgroundColor: "black",
                  color: "white",
                  direction: "ltr",
                }}
              >
                #000000
              </td>
              <td>1402/11/15</td>
              <td>مبینا سلامیان</td>
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

export default ColorsList;
