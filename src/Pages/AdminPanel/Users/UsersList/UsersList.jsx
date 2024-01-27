import React from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";

function UsersList() {
  return (
    <div className="pb-6">
      <Table title={"لیست"} main={"کاربران"}>
        <table className="user-table mt-7">
          <thead className="">
            <tr className="child:font-Lalezar text-xl bg-blue-600  text-white child:p-3 text-center">
              <td>شماره</td>
              <td>پروفایل</td>
              <td>نام</td>
              <td>نام کاربری</td>
              <td>نقش</td>
              <td>شماره</td>
              <td>ایمیل</td>
              <td>تاریخ</td>
              <td>حذف</td>
              <td>نقش</td>
              <td>جزییات</td>
              <td>ویرایش</td>
            </tr>
          </thead>
          <tbody>
            <tr className="child:p-3 text-center font-DanaMedium">
              <td>1</td>
              <td>
                <div className="w-14 h-14  mx-auto bg-gray-200 rounded-full flex-center">
                  <img src="/images/user.png" className="w-12 h-12" />
                </div>
              </td>
              <td>میلاد سلامیان</td>
              <td>Milad-1385</td>
              <td>ادمین</td>
              <td>09336084013</td>
              <td>milad1385@gmail.com</td>
              <td>1402/11/04</td>
              <td>
                <button className="bg-red-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                  حذف
                </button>
              </td>
              <td>
                <button className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                  نقش
                </button>
              </td>
              <td>
                <button className="bg-gray-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
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
                <div className="w-14 h-14  mx-auto bg-gray-200 rounded-full flex-center">
                  <img src="/images/user.png" className="w-12 h-12" />
                </div>
              </td>
              <td>میلاد سلامیان</td>
              <td>Milad-1385</td>
              <td>ادمین</td>
              <td>09336084013</td>
              <td>milad1385@gmail.com</td>
              <td>1402/11/04</td>
              <td>
                <button className="bg-red-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                  حذف
                </button>
              </td>
              <td>
                <button className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                  نقش
                </button>
              </td>
              <td>
                <button className="bg-gray-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
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
                <div className="w-14 h-14  mx-auto bg-gray-200 rounded-full flex-center">
                  <img src="/images/user.png" className="w-12 h-12" />
                </div>
              </td>
              <td>میلاد سلامیان</td>
              <td>Milad-1385</td>
              <td>ادمین</td>
              <td>09336084013</td>
              <td>milad1385@gmail.com</td>
              <td>1402/11/04</td>
              <td>
                <button className="bg-red-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                  حذف
                </button>
              </td>
              <td>
                <button className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                  نقش
                </button>
              </td>
              <td>
                <button className="bg-gray-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
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
              <td>4</td>
              <td>
                <div className="w-14 h-14  mx-auto bg-gray-200 rounded-full flex-center">
                  <img src="/images/user.png" className="w-12 h-12" />
                </div>
              </td>
              <td>میلاد سلامیان</td>
              <td>Milad-1385</td>
              <td>ادمین</td>
              <td>09336084013</td>
              <td>milad1385@gmail.com</td>
              <td>1402/11/04</td>
              <td>
                <button className="bg-red-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                  حذف
                </button>
              </td>
              <td>
                <button className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                  نقش
                </button>
              </td>
              <td>
                <button className="bg-gray-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
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

export default UsersList;
