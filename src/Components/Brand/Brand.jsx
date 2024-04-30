import React from "react";

function Brand({ image }) {
  return (
    <div className="bg-white rounded-md flex-center">
      <img src={`/images/category/${image}`} alt="b1" className="w-[173px]" />
    </div>
  );
}

export default Brand;
