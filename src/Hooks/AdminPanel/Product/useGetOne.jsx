import React from "react";
import { useQuery } from "react-query";
import { getProductInfo } from "../../../services/product";

function useGetOne(title) {
  return useQuery(["productInfo", title], () => getProductInfo(title));
}

export default useGetOne;
