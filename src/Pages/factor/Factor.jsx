import React, { useEffect } from "react";
import "./factor.css";
import { useParams } from "react-router-dom";
import useMainOrder from "../../Hooks/order/useMainOrder";
function Factor() {
  const { id } = useParams();
  const { data: orderInfo } = useMainOrder(id);
  console.log(orderInfo);
  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
  }, []);
  const printFactorHandler = () => {
    if (window.print) {
      window.print();
    } else {
      alert("مرورگر شما از قابلیت چاپ پشتیبانی نمی کند ، لطفا آپدیت کنید");
    }
  };
  return (
    <div className="container py-10">
      <h1 className="text-base md:text-lg lg:text-2xl font-DanaDemiBold text-center">
        صورت حساب فروش کالا
      </h1>
      <div className="space-y-4 mt-4">
        <div className="font-DanaMedium">
          شماره سفارش :{" "}
          <span className="font-DanaDemiBold">{orderInfo?.orderCode}</span>
        </div>
        <div className="font-DanaMedium">
          تاریخ سفارش :{" "}
          <span className="font-DanaDemiBold">
            {new Date(orderInfo?.createdAt).toLocaleDateString("fa-IR")}
          </span>
        </div>
      </div>
      <div className="py-6  mt-4 w-full text-sm md:text-base border-b border-b-gray-300">
        <h2 className="mx-auto pb-3 flex-center flex-col font-DanaDemiBold text-sm  md:text-lg border-b border-gray-300 w-full">
          مشخصات فروشنده
        </h2>
        <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-x-[120px]">
          <div className="font-DanaMedium">
            نام شخص حقیقی / حقوقی :{" "}
            <span className="font-DanaDemiBold text-gray-700">
              میلاد سلامیان
            </span>
          </div>
          <div className="font-DanaMedium">
            شماره اقتصادی:{" "}
            <span className="font-DanaDemiBold text-gray-700">25452358</span>
          </div>
          <div className="font-DanaMedium">
            شماره ثبت / ملی :{" "}
            <span className="font-DanaDemiBold text-gray-700">94548415</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-x-[120px]">
          <div className="font-DanaMedium">
            آدرس :{" "}
            <span className="font-DanaDemiBold text-gray-700">
              کرج ، فردیس ، کانال غربی
            </span>
          </div>
          <div className="font-DanaMedium">
            کد پستی :{" "}
            <span className="font-DanaDemiBold text-gray-700">25452358</span>
          </div>
          <div className="font-DanaMedium">
            تلفن:{" "}
            <span className="font-DanaDemiBold text-gray-700">02636578952</span>
          </div>
        </div>
      </div>
      <div className="pb-6  mt-4 w-full text-sm md:text-base border-b border-b-gray-300">
        <h2 className="mx-auto pb-3 flex-center flex-col font-DanaDemiBold text-sm  md:text-lg border-b border-gray-300 w-full">
          مشخصات خریدار
        </h2>
        <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-x-[120px]">
          <div className="font-DanaMedium">
            نام شخص حقیقی / حقوقی :{" "}
            <span className="font-DanaDemiBold text-gray-700">
              {orderInfo?.user.name}
            </span>
          </div>
          <div className="font-DanaMedium">
            ایمیل :{" "}
            <span className="font-DanaDemiBold text-gray-700">
              {orderInfo?.user.email}
            </span>
          </div>
          <div className="font-DanaMedium">
            تاریخ تحویل:{" "}
            <span className="font-DanaDemiBold text-gray-700">
              {orderInfo?.deliveryDate}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-x-[120px]">
          <div className="font-DanaMedium">
            آدرس :{" "}
            <span className="font-DanaDemiBold text-gray-700">
              {orderInfo?.address}
            </span>
          </div>
          <div className="font-DanaMedium">
            کد پستی :{" "}
            <span className="font-DanaDemiBold text-gray-700">
              {orderInfo?.postCode}
            </span>
          </div>
          <div className="font-DanaMedium">
            تلفن:{" "}
            <span className="font-DanaDemiBold text-gray-700">
              {orderInfo?.user.phone}
            </span>
          </div>
        </div>
      </div>
      <div className="pb-6  mt-4 w-full text-sm md:text-base">
        <h2 className="text-center pb-3 font-DanaDemiBold text-sm  md:text-lg border-b border-gray-300 w-full">
          مشخصات محصولات
        </h2>
        <div className="table-container scorll-bar">
          <table className="mt-4">
            <thead>
              <tr className="child:pb-4">
                <th>ردیف</th>
                <th>کد کالا</th>
                <th>نام</th>
                <th>تعداد</th>
                <th>مبلغ کل</th>
                <th>مبلغ تخفیف </th>
                <th>مبلغ نهایی </th>
              </tr>
            </thead>
            <tbody className="">
              {orderInfo?.products.map((item, index) => (
                <tr
                  className="!bg-gray-100 text-center child:p-4 !border-1"
                  key={item.id}
                >
                  <td>{index + 1}</td>
                  <td>{item.product.link}</td>
                  <td>{item.product.title}</td>
                  <td>{item.qty}</td>
                  <td>
                    {(
                      item.product.price +
                      ((item.product.price * item.product.off) / 100) * item.qty
                    ).toLocaleString("fa")}
                  </td>
                  <td>
                    {(
                      (item.product.price * item.qty * item.product.off) /
                      100
                    ).toLocaleString("fa")}
                  </td>
                  <td>{(item.price * item.qty).toLocaleString("fa")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 space-y-3">
          <div className="border-b border-b-gray-300 pb-4">
            مبلغ کل :{" "}
            <span className="font-DanaDemiBold">
              {(orderInfo?.totalPrice + orderInfo?.discount).toLocaleString(
                "fa"
              )}{" "}
              تومان
            </span>
          </div>
          <div className="border-b border-b-gray-300 pb-4">
            مبلغ پرداختی :{" "}
            <span className="font-DanaDemiBold">
              {orderInfo?.totalPrice.toLocaleString("fa")} تومان
            </span>
          </div>
          <div className="border-b border-b-gray-300 pb-4">
            سود شما از این خرید :{" "}
            <span className="font-DanaDemiBold">
              {orderInfo?.discount.toLocaleString("fa")} تومان
            </span>
          </div>
          <div className="border-b border-b-gray-300 pb-4 grid grid-cols-6">
            <div>امضا خریدار</div>
            <div>امضا فروشنده</div>
          </div>
          <button
            className="bg-black text-white px-4 py-2 rounded-md font-DanaMedium"
            onClick={printFactorHandler}
          >
            پرینت فاکتور
          </button>
        </div>
        <h4 className="text-center font-DanaDemiBold text-sm md:text-lg mt-6">
          متشکریم از خرید شما {"میلاد سلامیان"} ، امیدوارم نهایت رضایت رو داشته
          باشید ❤️
        </h4>
      </div>
    </div>
  );
}

export default Factor;
