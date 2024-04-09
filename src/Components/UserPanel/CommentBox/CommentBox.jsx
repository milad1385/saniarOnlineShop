import React from "react";

function CommentBox({ creator, product, body, score, isAccept, createdAt }) {
  return (
    <div className="py-2">
      <div className="flex items-center justify-between">
        <img
          src={`http://localhost:3001/uploads/covers/${product.images[0]}`}
          alt="laptop-1.jpg"
          className="w-[80px] h-[80px]"
        />
        <div className="flex items-center gap-x-2">
          <span className="bg-green-500 text-white px-2 py-1">
            {isAccept ? "تایید شده" : "تایید نشده"}
          </span>
          <button className="bg-red-500 text-white p-1">
            <svg className="w-6 h-6">
              <use href="#trash"></use>
            </svg>
          </button>
          <button className="bg-blue-600 text-white p-1">
            <svg className="w-6 h-6">
              <use href="#edit"></use>
            </svg>
          </button>
          <button className="bg-amber-400 text-white p-1">
            <svg className="w-6 h-6">
              <use href="#chat"></use>
            </svg>
          </button>
        </div>
      </div>
      <div className="border border-gray-200 p-4 rounded-md mt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-x-2">
            <p className="font-DanaDemiBold">{creator.name}</p>
            <span className="block h-[2px] w-2.5 bg-gray-600"></span>
            <p className="font-DanaDemiBold">
              {new Date(createdAt).toLocaleDateString("fa-IR")}
            </p>
          </div>
          <div className="flex items-center gap-x-1">
            {new Array(Math.ceil(score)).fill(0).map((score, index) => (
              <svg className="w-6 h-6 text-yellow-500" key={index}>
                <use href="#star"></use>
              </svg>
            ))}

            {new Array(Math.ceil(5 - score)).fill(0).map((score, index) => (
              <svg className="w-6 h-6 text-gray-500" key={index}>
                <use href="#star"></use>
              </svg>
            ))}
          </div>
        </div>
        <p className="mt-5">{body}</p>
      </div>
    </div>
  );
}

export default CommentBox;
