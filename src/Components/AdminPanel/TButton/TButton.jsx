import React from "react";

function TButton({ title, className, onClick, disable, children }) {
  return (
    <button
      disabled={disable}
      className={`${
        className && className
      } text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar`}
      onClick={onClick}
    >
      {title}
      {children}
    </button>
  );
}

export default TButton;
