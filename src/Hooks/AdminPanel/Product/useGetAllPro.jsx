import React from "react";
import { useQuery } from "react-query";
import { getAllProductsWithOutPagination } from "../../../services/product";

function useGetAllPro() {
  return useQuery(["allPro"], getAllProductsWithOutPagination);
}

export default useGetAllPro;
