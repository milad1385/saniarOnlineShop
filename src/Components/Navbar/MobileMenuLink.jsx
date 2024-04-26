import React from "react";
import { Link } from "react-router-dom";

function MobileMenuLink({ link, title, icon }) {
  return (
    <li>
      <Link to={link} className="flex justify-between">
        <div className="flex gap-x-2">
          <svg className="w-5 h-5">
            <use href={`#${icon}`}></use>
          </svg>
          {title}
        </div>
      </Link>
    </li>
  );
}

export default MobileMenuLink;
