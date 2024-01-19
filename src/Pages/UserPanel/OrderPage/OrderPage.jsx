import React from "react";
import PageTitle from "../../../Components/UserPanel/PageTitle/PageTitle";
import { Link } from "react-router-dom";
import Pagination from "../../../Components/Pagination/Pagination";

function OrderPage() {
  return (
    <div>
      <PageTitle icon={"shop-card"} title={"کد های تخفیف من"} />
      <div className="table-container mt-6">
        <table class="bg-white">
          <thead>
            <tr className="child:border child:bg-gray-500 child:text-white child:border-slate-300 child:p-2 child:font-DanaDemiBold">
              <th>شناسه</th>
              <th>شماره سفارش</th>
              <th> تاریخ ثبت سفارش</th>
              <th>وضعیت سفارش</th>
              <th>جزییات</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center child:border child:border-slate-300 child:p-2 child:font-DanaMedium">
              <td>1234</td>
              <td>
                <span>12345852</span>
              </td>
              <td>1402/05/08</td>
              <td>
                <td className="flex-center">
                  <span className="mr-2 bg-green-600 text-white py-1 px-2 text-sm">
                    ارسال شده
                  </span>
                </td>
              </td>
              <td>
                <Link to={"/my-account/tickets/answer-ticket/1"}>
                  <button className="flex-center mx-auto gap-x-2 bg-blue-600 text-white py-1.5 px-2 rounded-md shadow-blue">
                    مشاهده
                    <svg className="w-5 h-5">
                      <use href="#eye"></use>
                    </svg>
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="text-center child:border child:border-slate-300 child:p-2 child:font-DanaMedium">
              <td>1234</td>
              <td>
                <span>12345852</span>
              </td>
              <td>1402/05/08</td>
              <td>
                <td className="flex-center">
                  <span className="mr-2 bg-red-600 text-white py-1 px-2 text-sm">
                    لغو شده
                  </span>
                </td>
              </td>
              <td>
                <Link to={"/my-account/tickets/answer-ticket/1"}>
                  <button className="flex-center mx-auto gap-x-2 bg-blue-600 text-white py-1.5 px-2 rounded-md shadow-blue">
                    مشاهده
                    <svg className="w-5 h-5">
                      <use href="#eye"></use>
                    </svg>
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="text-center child:border child:border-slate-300 child:p-2 child:font-DanaMedium">
              <td>1234</td>
              <td>
                <span>12345852</span>
              </td>
              <td>1402/05/08</td>
              <td>
                <td className="flex-center">
                  <span className="mr-2 bg-gray-500 text-white py-1 px-2 text-sm">
                    در حال ارسال
                  </span>
                </td>
              </td>
              <td>
                <Link to={"/my-account/tickets/answer-ticket/1"}>
                  <button className="flex-center mx-auto gap-x-2 bg-blue-600 text-white py-1.5 px-2 rounded-md shadow-blue">
                    مشاهده
                    <svg className="w-5 h-5">
                      <use href="#eye"></use>
                    </svg>
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination/>
    </div>
  );
}

export default OrderPage;
