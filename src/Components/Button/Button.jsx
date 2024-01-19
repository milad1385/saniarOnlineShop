import React from "react";

function Button({ title, onClick }) {
  return (
    <button
      className="bg-blue-600 text-white p-2 px-6 rounded-md shadow-blue mt-5"
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
