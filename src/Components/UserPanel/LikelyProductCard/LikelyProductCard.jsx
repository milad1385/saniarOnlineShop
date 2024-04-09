import React from "react";
import useDelete from "../../../Hooks/wishlist/useDelete";

function LikelyProductCard({ product }) {
  const { mutateAsync: deleteWish } = useDelete();

  const deleteWishListHandler = async (id) => {
    console.log(id);
    await deleteWish(id);
  };
  return (
    <div className="flex items-center justify-between flex-col md:flex-row py-2.5">
      <div className="flex items-center gap-x-5 flex-col md:flex-row">
        <img
          src={`http://localhost:3001/uploads/covers/${product.images[0]}`}
          alt="laptop-1.jpg"
          className="w-24  h-24 rounded-md"
        />
        <div>
          <p className="font-DanaDemiBold text-gray-600 text-center md:text-right">
            {product.title}
          </p>
          <span className="text-green-500 font-DanaDemiBold mt-2 block text-center md:text-right">
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
        <div className="bg-blue-600 text-white p-2 rounded-md shadow-blue">
          <svg className="w-6 h-6">
            <use href="#shopping-cart"></use>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default LikelyProductCard;
