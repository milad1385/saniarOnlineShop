import React from "react";
import useDelete from "../../../Hooks/wishlist/useDelete";
import { Link } from "react-router-dom";

function LikelyProductCard({ product }) {
  console.log(product);
  const { mutateAsync: deleteWish } = useDelete();

  const deleteWishListHandler = async (id) => {
    await deleteWish(id);
  };
  return (
    <div className="flex items-center justify-between flex-col md:flex-row py-2.5">
      <div className="flex items-center gap-x-5 flex-col md:flex-row">
        <img
          src={`https://shoppingmilad.liara.run/uploads/covers/${product.images[0]}`}
          alt="laptop-1.jpg"
          className="w-24  h-24 rounded-md"
        />
        <div className="mt-2">
          <p className="font-DanaDemiBold text-sm md:text-base text-gray-600 text-center md:text-right">
            {product.title}
          </p>
          <span className="text-green-500 text-sm md:text-base font-DanaDemiBold mt-2 block text-center md:text-right">
            {product.price.toLocaleString("fa")} <span>تومان</span>
          </span>
        </div>
      </div>
      <div className="flex items-center gap-x-2 mt-4">
        <div
          className="bg-red-600 text-white p-2 rounded-md shadow"
          onClick={() => deleteWishListHandler(product._id)}
        >
          <svg className="w-6 h-6">
            <use href="#trash"></use>
          </svg>
        </div>
        <Link
          to={`/product/${product.link}`}
          className="bg-blue-600 text-white p-2 rounded-md shadow-blue"
        >
          <svg className="w-6 h-6">
            <use href="#shopping-cart"></use>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default LikelyProductCard;
