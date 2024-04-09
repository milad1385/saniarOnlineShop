import React from "react";
import { Link } from "react-router-dom";

function MegaMenuValue({ items, name }) {
  return (
    <li className="child:flex flex flex-col gap-y-2 child:pr-2">
      <span className="font-DanaDemiBold border-r-[3px] border-r-blue-600">
        {name}
      </span>
      {items.map((item) => (
        <Link key={item.title} className="text-gray-500 text-sm" to={item.Link}>
          {item.title}
        </Link>
      ))}
    </li>
  );
}

export default MegaMenuValue;
