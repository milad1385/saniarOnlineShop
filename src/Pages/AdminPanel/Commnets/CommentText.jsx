import React from "react";

function CommentText({ onClose , text }) {
  return (
    <div className="bg-white pb-6 pt-4 px-5  w-[93%] md:w-[425px] mx-auto">
      <h3 className="font-MorabbaBold text-lg md:text-3xl text-center mt-3">
        متن کامنت
      </h3>
      <div className="mt-4 bg-gray-100 px-2 py-1">
        <p className="font-DanaMedium leading-7 comment-text">{text}</p>
      </div>
      <div className="flex items-center justify-center gap-x-5 mt-8">
        <button
          className={`bg-blue-600 w-full text-white font-MorabbaBold px-16 py-4 text-lg md:text-xl`}
          onClick={onClose}
        >
          مشاهده کردم
        </button>
      </div>
    </div>
  );
}

export default CommentText;
