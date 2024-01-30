import React from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";

function CategoriesList() {
  return (
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
            <tr className="child:p-4 text-center font-DanaMedium">
                <td>1</td>
                <td>
                    <img src="/images/category/mobile.png" className="w-[65px] md:w-[80px] mx-auto"/>
                </td>
                <td>موبایل</td>
                <td>1402/05/07</td>
                <td>mobile-link</td>
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
                <td>
                    <img src="/images/category/varzeshi.png" className="w-[65px] md:w-[80px] mx-auto"/>
                </td>
                <td>ورزشی</td>
                <td>1402/12/10</td>
                <td>sport-link</td>
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
                <td>
                    <img src="/images/category/kalaye-degital.png" className="w-[65px] md:w-[80px] mx-auto"/>
                </td>
                <td>کالای دیجیتال</td>
                <td>1403/01/07</td>
                <td>digi-link</td>
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

export default CategoriesList;
