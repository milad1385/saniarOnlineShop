import React, { useEffect } from "react";
import PageTitle from "../PageTitle/PageTitle";
import useMainOrder from "../../../Hooks/order/useMainOrder";
import { Link, useParams } from "react-router-dom";

function OrderDetail() {
  const { id } = useParams();
  const { data: orderInfo } = useMainOrder(id);
  console.log(orderInfo);
  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
  }, []);
  return (
    <>
      <div className="mt-5 bg-white p-4 rounded-md shadow">
        <PageTitle icon={`shop-card`} title={"جزییات سفارش"} />
        <div className="divide-y-2 divide-gray-200">
          <div className="flex items-center gap-x-10 text-sm md:text-base py-5">
            <span className="flex items-center gap-x-3">
              کد پیگیری سفارش{" "}
              <span className="font-DanaDemiBold md:mt-1.5">
                {orderInfo?.orderCode}
              </span>
            </span>

            <span className="flex items-center gap-x-3">
              تاریخ ثبت سفارش{" "}
              <span className="font-DanaDemiBold md:mt-1.5">
                {new Date(orderInfo?.createdAt).toLocaleDateString("fa-IR")}
              </span>
            </span>
          </div>

          <div className="flex items-center gap-x-10 text-sm md:text-base py-5">
            <span className="flex items-center gap-x-3">
              تحویل گیرنده{" "}
              <span className="font-DanaDemiBold md:mt-1.5">
                {orderInfo?.user.name}
              </span>
            </span>

            <span className="flex items-center gap-x-3">
              شماره موبایل{" "}
              <span className="font-DanaDemiBold md:mt-1.5">
                {orderInfo?.user.phone}
              </span>
            </span>
            <div>
              <span className="flex items-center gap-x-3">
                آدرس{" "}
                <span className="font-DanaDemiBold md:mt-1">
                  {orderInfo?.address}
                </span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-x-10 text-sm md:text-base py-5">
            <span className="flex items-center gap-x-3">
              مبلغ{" "}
              <span className="font-DanaDemiBold md:mt-1">
                {orderInfo?.totalPrice.toLocaleString("fa")} تومان{" "}
              </span>
            </span>

            <span className="flex items-center gap-x-3">
              نوع پرداخت{" "}
              <span className="font-DanaDemiBold md:mt-1">
                {orderInfo?.isPay ? "اینترنتی" : "حضوری"}
              </span>
            </span>
            <div>
              <span className="flex items-center gap-x-3">
                تخفیف{" "}
                <span className="font-DanaDemiBold md:mt-1">
                  {orderInfo?.discount.toLocaleString("fa")} تومان
                </span>
              </span>
            </div>
          </div>

          <div className="text-sm md:text-base py-5">
            <div className="flex items-center gap-x-10">
              <span className="flex items-center gap-x-3">
                زمان تحویل{" "}
                <span className="font-DanaDemiBold md:mt-1">
                  {orderInfo?.deliveryDate}{" "}
                </span>
              </span>

              <span className="flex items-center gap-x-3">
                ساعت تقریبی{" "}
                <span className="font-DanaDemiBold md:mt-1">
                  {orderInfo?.deliveryTime}
                </span>
              </span>
            </div>
            <div className="py-3">
              <div className="flex items-center gap-x-3 text-green-600 font-DanaMedium mt-6">
                <span
                  className={`${
                    orderInfo?.status === 0
                      ? "text-red-600"
                      : orderInfo?.status === 1
                      ? "text-sky-500"
                      : orderInfo?.status === 2
                      ? "text-green-600"
                      : ""
                  }`}
                >
                  {orderInfo?.status === 0 && "در حال بررسی"}
                  {orderInfo?.status === 1 && "در حال ارسال"}
                  {orderInfo?.status === 2 && "تحویل داده شده"}
                </span>
                <svg className="w-6 h-6">
                  {orderInfo?.status === 2 && <use href="#check-mark"></use>}
                </svg>
              </div>
              <div className="w-full mt-4 flex flex-row-reverse bg-gray-100 rounded-full">
                <div
                  className={`${
                    orderInfo?.status === 0
                      ? "bg-red-600"
                      : orderInfo?.status === 1
                      ? "bg-sky-500"
                      : orderInfo?.status === 2
                      ? "bg-green-600"
                      : ""
                  } py-1.5 rounded-full ${
                    orderInfo?.status === 0
                      ? "w-[20%]"
                      : orderInfo?.status === 1
                      ? "w-[50%]"
                      : orderInfo?.status === 2
                      ? "w-[100%]"
                      : ""
                  }`}
                ></div>
              </div>
            </div>
          </div>

          <div className="text-sm md:text-base py-5 divide-y-2 divide-gray-200">
            {orderInfo?.products.map((item) => (
              <div className="py-3" key={item._id}>
                <div className="flex  gap-x-3">
                  <img
                    className="w-[100px]"
                    src={`http://localhost:3001/uploads/covers/${item.product.images[0]}`}
                  />
                  <div>
                    <p className="font-DanaMedium text-gray-600">
                      {item.product.title}
                    </p>
                    <span className="text-green-600 font-DanaDemiBold block mt-3">
                      {item.price.toLocaleString("fa")} تومان
                    </span>
                    <span className="font-DanaMedium text-gray-600 block mt-3">
                      تعداد : {item.qty}
                    </span>
                  </div>
                </div>
                <Link
                  to={`/product/${item.product.link}`}
                  className="flex items-center flex-row-reverse gap-x-2 font-DanaMedium text-gray-600"
                >
                  مشاهده کالا
                  <svg className="w-6 h-6">
                    <use href="#eye"></use>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetail;
