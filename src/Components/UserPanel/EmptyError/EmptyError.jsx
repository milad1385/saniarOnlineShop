import React from "react";

function EmptyError({ msg, className }) {
  return (
    <div
      className={`bg-red-600 text-white flex-center py-7 w-full text-base md:text-2xl rounded-md shadow font-DanaDemiBold ${
        className && className
      }`}
    >
      {msg}
    </div>
  );
}

export default EmptyError;
