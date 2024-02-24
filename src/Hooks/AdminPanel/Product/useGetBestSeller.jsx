import React from "react";
import { useQuery } from "react-query";
import { getBestSellerProduct } from "../../../services/product";

function useGetBestSeller() {
  return useQuery(["best-seller"], getBestSellerProduct);
}

export default useGetBestSeller;
