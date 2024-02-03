import React, { useContext, useEffect } from "react";
import Table from "../../../Components/AdminPanel/Table/Table";
import { AppContext } from "../../../App";

function NewsLetter() {
  const { setIsShowAdminMenu } = useContext(AppContext);
  useEffect(() => {
    setIsShowAdminMenu(false);
  }, []);
  return (
    <div className="container">
      <div className="pb-6">
        <Table title={"لیست"} main={"خبرنامه ها"}>
          <table className="user-table mt-7">
            <thead className="">
              <tr className="child:font-Lalezar text-base md:text-xl bg-blue-600  text-white child:p-3 text-center">
                <td>شماره</td>
                <td>ایمیل</td>
                <td>تاریخ</td>
                <td>حذف</td>
                <td>ارسال</td>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              <tr className="child:p-4 text-center font-DanaMedium">
                <td>1</td>
                <td>miladsalamian@gmail.com</td>
                <td>1402/08/09</td>
                <td>
                  <button className="bg-red-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    حذف
                  </button>
                </td>
                <td>
                  <button className="bg-blue-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    ارسال
                  </button>
                </td>
              </tr>
              <tr className="child:p-4 text-center font-DanaMedium">
                <td>2</td>
                <td>miladsalamian@gmail.com</td>
                <td>1402/08/09</td>
                <td>
                  <button className="bg-red-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    حذف
                  </button>
                </td>
                <td>
                  <button className="bg-blue-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    ارسال
                  </button>
                </td>
              </tr>
              <tr className="child:p-4 text-center font-DanaMedium">
                <td>3</td>
                <td>miladsalamian@gmail.com</td>
                <td>1402/08/09</td>
                <td>
                  <button className="bg-red-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    حذف
                  </button>
                </td>
                <td>
                  <button className="bg-blue-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    ارسال
                  </button>
                </td>
              </tr>
              <tr className="child:p-4 text-center font-DanaMedium">
                <td>4</td>
                <td>miladsalamian@gmail.com</td>
                <td>1402/08/09</td>
                <td>
                  <button className="bg-red-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    حذف
                  </button>
                </td>
                <td>
                  <button className="bg-blue-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    ارسال
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

export default NewsLetter;
