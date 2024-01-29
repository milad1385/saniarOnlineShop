import React, { useState } from "react";
import Table from "../../../Components/AdminPanel/Table/Table";
import DetailModal from "../../../Components/DetailModal/DetailModal";
function Orders() {
  const [isShowDetailModal, setIsShowDetailModal] = useState(false);
  return (
    <>
      <div className="container">
        <div className="pb-6">
          <Table title={"لیست"} main={"سفارشات "}>
            <table className="user-table mt-7">
              <thead className="">
                <tr className="child:font-Lalezar text-base md:text-xl bg-blue-600  text-white child:p-3 text-center">
                  <td>شماره</td>
                  <td>نام</td>
                  <td>کد فاکتور</td>
                  <td>تاریخ</td>
                  <td>ساعت</td>
                  <td>وضعیت</td>
                  <td>مبلغ</td>
                  <td>نوع پرداخت</td>
                  <td>تایید</td>
                  <td>حذف</td>
                  <td>جزییات</td>
                  <td>ویرایش</td>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                <tr className="child:p-4 text-center font-DanaMedium">
                  <td className="bg-gray-600 text-white">1</td>
                  <td>میلاد سلامیان</td>
                  <td>2696mn</td>
                  <td>1402/11/10</td>
                  <td>12:56</td>
                  <td>در حال ارسال</td>
                  <td>25,250,000</td>
                  <td>اینترنتی</td>
                  <td>
                    <button className="bg-gray-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                      تایید
                    </button>
                  </td>
                  <td>
                    <button className="bg-red-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                      حذف
                    </button>
                  </td>
                  <td>
                    <button
                      className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                      onClick={() => setIsShowDetailModal(true)}
                    >
                      جزییات
                    </button>
                  </td>
                  <td>
                    <button className="bg-blue-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                      ویرایش
                    </button>
                  </td>
                </tr>
                <tr className="child:p-4 text-center font-DanaMedium">
                  <td className="bg-green-600 text-white">2</td>
                  <td>میلاد سلامیان</td>
                  <td>2696mn</td>
                  <td>1402/11/10</td>
                  <td>12:56</td>
                  <td>ارسال شده</td>
                  <td>25,100,000</td>
                  <td>حضوری</td>
                  <td>
                    <button className="bg-gray-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                      تایید
                    </button>
                  </td>
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
                <tr className="child:p-4 text-center font-DanaMedium">
                  <td className="bg-red-600 text-white">3</td>
                  <td>میلاد سلامیان</td>
                  <td>2696mn</td>
                  <td>1402/11/10</td>
                  <td>12:56</td>
                  <td>لغو شده</td>
                  <td>25,100,000</td>
                  <td>حضوری</td>
                  <td>
                    <button className="bg-gray-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                      تایید
                    </button>
                  </td>
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
      </div>

      {isShowDetailModal && (
        <DetailModal onClose={setIsShowDetailModal}>
          <Table>
            <table className="user-table mt-7">
              <thead className="">
                <tr className="child:font-Lalezar text-base md:text-xl bg-gray-200 child:p-4 text-center">
                  <td>محصولات</td>
                  <td>تخفیف</td>
                  <td>مبلغ کل</td>
                  <td>استان</td>
                  <td>شهر</td>
                  <td>فاکتور</td>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                <tr className="child:p-4 text-center font-DanaMedium">
                  <td>گوشی ، شارژر</td>
                  <td>120,500</td>
                  <td>35,000,000 تومان</td>
                  <td>البرز</td>
                  <td>فردیس</td>
                  <td>
                    <button className="bg-blue-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                      مشاهده
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Table>
        </DetailModal>
      )}
    </>
  );
}

export default Orders;
