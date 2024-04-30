import React, { useEffect } from "react";
import OrderStatus from "../../Components/OrderStatus/OrderStatus";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import FooterMenu from "../../Components/FooterMenu/FooterMenu";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import OrderCard from "../../Components/OrderCard/OrderCard";
import PageTitle from "../../Components/UserPanel/PageTitle/PageTitle";
import { Link } from "react-router-dom";
import useBasket from "../../Hooks/basket/useBasket";
import Loader from "../../Components/Loader/Loader";

function Card() {
  const { data: baskets, isLoading } = useBasket();
  const calculateTotalPrice = baskets?.reduce(
    (prev, curr) => prev + curr.price * curr.qty,
    0
  );

  const calcTotalDiscount = baskets?.reduce(
    (prev, curr) =>
      prev + (curr.qty * (curr.product.price * curr.product.off)) / 100,
    0
  );

  const calcTotal = calculateTotalPrice - calcTotalDiscount;

  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
  }, []);

  if (isLoading) return <Loader />;
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container mt-8">
        <BreadCrumb
          links={[
            { id: 1, name: "خانه", to: "/" },
            { id: 2, name: "فروشگاه", to: "/" },
            { id: 3, name: "پرداخت", to: "/" },
          ]}
        />
        <div className="mt-12">
          <OrderStatus />
        </div>
        {baskets?.length > 0 ? (
          <div className="flex flex-col md:flex-row gap-6 mt-10">
            <div className="w-full space-y-4">
              {baskets?.map((basket) => (
                <OrderCard key={basket._id} {...basket} />
              ))}
            </div>
            <div className="w-auto md:w-[450px] h-[350px] bg-white rounded-md shadow p-3 sticky top-0 ">
              <PageTitle title={"سفارش شما"} icon={"shopping-cart"} />
              <div className="font-DanaDemiBold flex items-center justify-between mt-3 text-sm text-gray-500">
                <p>محصول</p>
                <p>قیمت کل</p>
              </div>
              <div className="mt-5 text-sm font-DanaDemiBold space-y-4">
                <div className="flex items-center justify-between bg-gray-100 py-3 px-2 rounded-md">
                  <span>جمع مبلغ: </span>
                  <p>
                    {calculateTotalPrice.toLocaleString("fa")}{" "}
                    <span>تومان</span>
                  </p>
                </div>
                <div className="flex items-center justify-between bg-gray-100 py-3 px-2 rounded-md">
                  <span>تخفیف : </span>
                  <p>
                    {calcTotalDiscount.toLocaleString("fa")} <span>تومان</span>
                  </p>
                </div>
                <div className="flex items-center justify-between bg-gray-100 py-3 px-2 rounded-md">
                  <span>مبلغ کل : </span>
                  <p>
                    {calcTotal.toLocaleString("fa")} <span>تومان</span>
                  </p>
                </div>
              </div>
              <Link
                to={"/order/detail"}
                className="bg-blue-600  flex items-center justify-center text-white p-2 px-6 rounded-md shadow-blue w-full mt-5"
              >
                تسویه حساب
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center flex-col">
            <img src="/images/emptybag.png" className="w-[300px]" />
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-DanaDemiBold">
              کاربر گرامی سبد خرید شما خالی است 🤐
            </p>
            <Link
              to={"/products"}
              className="bg-blue-600 text-white p-2 px-4 font-DanaDemiBold rounded-md shadow-blue my-10"
            >
              بازگشت به فروشگاه
            </Link>
          </div>
        )}

        {/* start empty basket */}
      </div>

      <Footer />
      <FooterMenu />
    </>
  );
}

export default Card;
