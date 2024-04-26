import React from "react";

function EmptyError({ msg, className }) {
  return (
    <div
      className={`bg-blue-600 text-white flex-center py-7 w-full text-base md:text-2xl rounded-md shadow font-DanaDemiBold ${
        className
      }`}
    >
      {msg}
    </div>
  );
}

export default EmptyError;
