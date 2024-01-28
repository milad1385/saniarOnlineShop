import React from "react";

function Table({ title, main, children }) {
  return (
    <div className="table-container mt-8">
      <h3 className="font-Lalezar text-xl md:text-3xl">
        {title} <span className="text-blue-600">{main}</span>
      </h3>
      <div className="bg-white rounded-md mt-5 shadow">{children}</div>
    </div>
  );
}

export default Table;
