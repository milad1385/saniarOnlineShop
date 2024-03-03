import React from "react";
import { useQuery } from "react-query";
import { searchProduct } from "../../../services/product";

function useSearch(search) {
  return useQuery(["search", search], () => searchProduct(search));
}

export default useSearch;
