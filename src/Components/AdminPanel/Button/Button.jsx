import React from "react";
import Sppiner from "../../../Components/Sppiner/Spinner";

function Button({ title, isLoading }) {
  return (
    <button className="bg-blue-600  font-Lalezar w-[135px] p-2 rounded-md text-white text-sm md:text-xl shadow-blue mt-6">
      {isLoading ? <Sppiner /> : title}
    </button>
  );
}

export default Button;
