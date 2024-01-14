import React from "react";
import { Link } from "react-router-dom";

function MegaMenuItem({link , title , icon}) {
  return (
    <li>
      <Link to={link} className="flex items-center gap-x-2">
        <svg className="w-6 h-6">
          <use href={`#${icon}`}></use>
        </svg>
        {title}
      </Link>
    </li>
  );
}

export default MegaMenuItem;
