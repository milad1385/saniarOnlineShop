import React, { useContext, useEffect } from "react";
import Table from "../../../Components/AdminPanel/Table/Table";
import { AppContext } from "../../../App";

function ContactUs() {
  const {setIsShowAdminMenu } = useContext(AppContext);
  useEffect(() => {
    setIsShowAdminMenu(false);
  }, []);
  return (
    <div className="container">
      <div className="pb-6">
        <Table title={"لیست"} main={"پیغام ها"}>
          <table className="user-table mt-7">
            <thead className="">
              <tr className="child:font-Lalezar text-base md:text-xl bg-blue-600  text-white child:p-3 text-center">
                <td>شماره</td>
                <td>نام</td>
                <td>ایمیل</td>
                <td>شماره</td>
                <td>تاریخ</td>
                <td>ساعت</td>
                <td>مشاهده</td>
                <td>حذف</td>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              <tr className="child:p-4 text-center font-DanaMedium">
                <td className="bg-red-600 text-white">1</td>
                <td>میلاد سلامیان</td>
                <td>miladsalami@gmail.com</td>
                <td>09336084013</td>
                <td>1402/11/10</td>
                <td>12:56</td>
                <td>
                  <button className="bg-blue-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    مشاهده
                  </button>
                </td>
                <td>
                  <button className="bg-red-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    حذف
                  </button>
                </td>
                
              </tr>
              <tr className="child:p-4 text-center font-DanaMedium">
                <td className="bg-green-600 text-white">2</td>
                <td>میلاد سلامیان</td>
                <td>miladsalami@gmail.com</td>
                <td>09336084013</td>
                <td>1402/11/10</td>
                <td>12:56</td>
                <td>
                  <button className="bg-blue-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    مشاهده
                  </button>
                </td>
                <td>
                  <button className="bg-red-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    حذف
                  </button>
                </td>
                
              </tr>
              <tr className="child:p-4 text-center font-DanaMedium">
                <td className="bg-red-600 text-white">3</td>
                <td>میلاد سلامیان</td>
                <td>miladsalami@gmail.com</td>
                <td>09336084013</td>
                <td>1402/11/10</td>
                <td>12:56</td>
                <td>
                  <button className="bg-blue-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    مشاهده
                  </button>
                </td>
                <td>
                  <button className="bg-red-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    حذف
                  </button>
                </td>
                
              </tr>
              <tr className="child:p-4 text-center font-DanaMedium">
                <td className="bg-green-600 text-white">
                    3
                </td>
                <td>میلاد سلامیان</td>
                <td>miladsalami@gmail.com</td>
                <td>09336084013</td>
                <td>1402/11/10</td>
                <td>12:56</td>
                <td>
                  <button className="bg-blue-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    مشاهده
                  </button>
                </td>
                <td>
                  <button className="bg-red-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    حذف
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

export default ContactUs;
