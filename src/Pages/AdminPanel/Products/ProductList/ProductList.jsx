import React from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";
function ProductList() {
  return (
    <div className="pb-6">
      <Table title={"لیست"} main={"محصولات"}>
        <table className="user-table mt-7">
          <thead className="">
            <tr className="child:font-Lalezar text-base md:text-xl bg-blue-600  text-white child:p-3 text-center">
              <td>شماره</td>
              <td>عکس</td>
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
            <tr className="child:p-3 text-center font-DanaMedium">
              <td>1</td>
              <td>
                <div className="w-[70px] md:w-[85px]">
                  <img src="/images/product/monitor.jpeg" className="" />
                </div>
              </td>
              <td>مانیتور گیمینگ</td>
              <td>12,500,000</td>
              <td>3</td>
              <td>25 %</td>
              <td>monitor-gaming</td>
              <td>کامپیوتر</td>
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
            <tr className="child:p-3 text-center font-DanaMedium">
              <td>2</td>
              <td>
                <img
                  src="/images/product/laptop7.png"
                  className="w-[85px] mx-auto"
                />
              </td>
              <td>لپ تاپ گیمینگ</td>
              <td>39,500,000</td>
              <td>3</td>
              <td>2 %</td>
              <td>asus-rog</td>
              <td>لپ تاپ</td>
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
            <tr className="child:p-3 text-center font-DanaMedium">
              <td>3</td>
              <td>
                <img
                  src="/images/product/iphone.jpeg"
                  className="w-[85px] mx-auto"
                />
              </td>
              <td>آیفون 14</td>
              <td>58,500,000</td>
              <td>8</td>
              <td>12 %</td>
              <td>iphone-14</td>
              <td>موبایل</td>
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
          </tbody>
        </table>
      </Table>
    </div>
  );
}

export default ProductList;
