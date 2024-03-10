import React from "react";

function Button({ title, onClick, icon }) {
  return (
    <button
      className="bg-blue-600 font-DanaMedium text-white p-2 px-3 rounded-md shadow-blue flex-center gap-x-2"
      onClick={onClick}
    >
      {icon && (
        <svg className="w-5 h-5 mb-1">
          <use href={`#${icon}`}></use>
        </svg>
      )}
      {title}
    </button>
  );
}

export default Button;
