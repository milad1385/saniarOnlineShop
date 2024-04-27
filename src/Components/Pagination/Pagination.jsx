import React from "react";
import { Link, useSearchParams } from "react-router-dom";

function Pagination({ count, page, setPage, status }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const handlePagination = (page) => {
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <ul className="flex items-center gap-x-5 my-10">
          {Array(count)
            .fill(0)
            .map((pagination, index) => (
              <li
                className={`bg-white w-10 h-10 flex-center rounded-md shadow cursor-pointer  ${
                  index + 1 === +page ? "pagination-active" : ""
                }`}
                key={index}
                onClick={() => setPage(index + 1)}
              >
                <div
                  // to={`?page=${index + 1}${status ? `&order=${status}` : ""}`}
                  className="w-full h-full flex-center text-sm md:text-base"
                  onClick={() => handlePagination(index + 1)}
                >
                  {index + 1}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default Pagination;
