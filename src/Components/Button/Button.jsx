import React from "react";

function Button({ title, onClick, icon }) {
  return (
    <button
      className="bg-blue-600 text-white p-2 px-6 rounded-md shadow-blue mt-5 flex-center gap-x-2"
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
