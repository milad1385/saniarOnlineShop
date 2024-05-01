import React from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { filterProduct } from "../../../services/product";

function useFilter(search) {
  const [searchParam] = useSearchParams();
  const categories = searchParam.getAll("category").length
    ? searchParam.getAll("category")
    : [];
  const sort = searchParam.get("order") || "all";
  const page = searchParam.get("page") || 1;
  const startPrice = searchParam.get("startPrice");
  const endPrice = searchParam.get("endPrice");
  const q = searchParam.get("q") || "";

  return useQuery(
    ["filteredProducts", categories, sort, +page, startPrice, endPrice, q],
    () => filterProduct(categories, sort, +page, startPrice, endPrice, q)
  );
}

export default useFilter;
