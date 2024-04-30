import React, { useEffect } from "react";
import PageTitle from "../../../Components/UserPanel/PageTitle/PageTitle";
import LikelyProductCard from "../../../Components/UserPanel/LikelyProductCard/LikelyProductCard";
import useGetMain from "../../../Hooks/wishlist/useGetMain";
import { Link } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
function LikelyProducts() {
  const { data: wishList, isLoading } = useGetMain();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (isLoading) return <Loader />;
  if (wishList?.length === 0)
    return (
      <div className="bg-blue-600 rounded-md shadow flex items-center justify-between flex-col py-16">
        <svg className={`w-36 h-36`}>
          <use className="text-white" href={`#heart`}></use>
        </svg>
        <h3 className="font-DanaDemiBold text-white text-sm md:text-2xl mt-5">
          هیچ علاقه مندی یافت نشد
        </h3>
        <Link
          className="mt-5 bg-white text-blue-600 font-DanaDemiBold text-sm md:text-lg p-3 rounded-md shadow"
          to={"/my-account"}
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    );
  return (
    <>
      <PageTitle title={"لیست علاقه مندی ها"} icon={"heart"} />
      <div className="bg-white rounded-md shadow mt-6">
        <p className="bg-gray-200 font-DanaDemiBold p-2 rounded-tl-md  rounded-tr-md">
          علاقه مندی ها
        </p>
        <div className="px-5 py-2 divide-y-2">
          {wishList?.map((wish) => (
            <LikelyProductCard key={wish._id} {...wish} />
          ))}
        </div>
      </div>
    </>
  );
}

export default LikelyProducts;
