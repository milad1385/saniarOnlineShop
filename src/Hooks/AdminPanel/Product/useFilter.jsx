import React from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { filterProduct } from "../../../services/product";

function useFilter() {
  const [searchParam] = useSearchParams();
  const categories = searchParam.getAll("category").length
    ? searchParam.getAll("category")
    : [];
  const sort = searchParam.get("order") || "all";
  const page = searchParam.get("page") || 1;
  const startPrice = searchParam.get("startPrice");
  const endPrice = searchParam.get("endPrice");

  return useQuery(
    ["filteredProducts", categories, sort, +page, startPrice, endPrice],
    () => filterProduct(categories, sort, +page, startPrice, endPrice)
  );
}

export default useFilter;
