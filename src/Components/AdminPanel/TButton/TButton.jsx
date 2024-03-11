import React from "react";

function TButton({ title, className, onClick }) {
  return (
    <button
      className={`${
        className && className
      } text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default TButton;
