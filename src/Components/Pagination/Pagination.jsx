import React from "react";
import { Link } from "react-router-dom";

function Pagination() {
  return (
    <>
      <div className="flex items-center justify-center">
        <ul className="flex items-center gap-x-5 my-10">
          <li className="bg-white w-10 h-10 flex-center rounded-md shadow pagination-active">
            <Link to={"/"} className="w-full h-full flex-center">1</Link>
          </li>
          <li className="bg-white w-10 h-10 flex-center rounded-md shadow">
            <Link to={"/"} className="w-full h-full flex-center">2</Link>
          </li>
          <li className="bg-white w-10 h-10 flex-center rounded-md shadow">
            <Link to={"/"} className="w-full h-full flex-center">3</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Pagination;
