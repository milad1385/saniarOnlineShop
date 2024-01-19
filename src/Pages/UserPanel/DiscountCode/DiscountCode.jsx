import React, { useEffect } from "react";
import PageTitle from "../../../Components/UserPanel/PageTitle/PageTitle";
import { Link } from "react-router-dom";
import Pagination from "../../../Components/Pagination/Pagination";
function DiscountCode() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <PageTitle icon={"gift"} title={"کد های تخفیف من"} />
      <div className="table-container mt-6">
        <table class="bg-white">
          <thead>
            <tr className="child:border child:bg-gray-500 child:text-white child:border-slate-300 child:p-2 child:font-DanaDemiBold">
              <th className="">شناسه</th>
              <th className="">کد تخفیف</th>
              <th className=""> ساخت</th>
              <th className="">انقضا</th>
              <th>برای</th>
              <th>وضعیت</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center child:border child:border-slate-300 child:p-2 child:font-DanaMedium">
              <td className="">1234</td>
              <td className="">
                <span className="">milad-react85</span>
              </td>
              <td>1402/05/08</td>
              <td>
                <td className="flex-center">1402/12/08</td>
              </td>
              <td>
                <Link to={"/"}>لپ تاپ گیمینگ Tuf</Link>
              </td>
              <td>
                <span className="mr-2 bg-green-600 text-white py-1 px-2 text-sm">
                  اعتبار دارد
                </span>
              </td>
            </tr>
            <tr className="text-center child:border child:border-slate-300 child:p-2 child:font-DanaMedium">
              <td className="">1234</td>
              <td className="">
                <span className="">milad-react85</span>
              </td>
              <td>1402/05/08</td>
              <td>
                <td className="flex-center">1402/12/08</td>
              </td>
              <td>
                <Link to={"/"}>لپ تاپ گیمینگ Tuf</Link>
              </td>
              <td>
                <span className="mr-2 bg-red-600 text-white py-1 px-2 text-sm">
                  اعتبار ندارد
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
}

export default DiscountCode;
