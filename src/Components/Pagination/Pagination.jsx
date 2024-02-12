import React from "react";
import { Link } from "react-router-dom";

function Pagination({ count = 3  , page = 1 , setPage }) {
  
  return (
    <>
      <div className="flex items-center justify-center">
        <ul className="flex items-center gap-x-5 my-10">
          {Array(count)
            .fill(0)
            .map((pagination, index) => (
              <li
                className={`bg-white w-10 h-10 flex-center rounded-md shadow  ${index + 1 === +page ? "pagination-active" : ""}`}
              >
                <Link
                  to={`?page=${index + 1}`}
                  className="w-full h-full flex-center"
                >
                  {index + 1}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default Pagination;
