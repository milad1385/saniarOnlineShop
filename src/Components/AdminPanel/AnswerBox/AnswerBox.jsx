import React from "react";

function AnswerBox({ body, creator, createdAt, isFromUserPanel }) {
  return (
    <div
      className={`w-11/12 sm:w-2/3  ${
        isFromUserPanel
          ? "bg-gray-100 text-zinc-700 "
          : "bg-blue-600 text-white mr-auto"
      }   p-4 rounded-2xl rounded-tr-sm`}
    >
      <h4
        className={`font-DanaMedium text-sm md:text-xl mb-1 ${
          isFromUserPanel ? "text-right" : "text-left"
        }`}
      >
        {creator?.name}
      </h4>
      <span
        className={`block text-xs font-Dana  ${
          isFromUserPanel ? "text-right" : "text-left"
        }`}
      >
        {new Date(createdAt).toLocaleString("fa")}
      </span>
      <p className="font-Dana mt-4 !text-sm md:!text-base">{body}</p>
    </div>
  );
}

export default AnswerBox;
