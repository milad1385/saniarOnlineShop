import React from "react";
import { Link } from "react-router-dom";

function AdsBox({image , href}) {
  return (
    <Link to={href} className="hover:-translate-y-2 transition-all duration-200">
      <img
        src={`/images/category/${image}`}
        alt={image}
        className="rounded-lg shadow-lg select-none"
      />
    </Link>
  );
}

export default AdsBox;
