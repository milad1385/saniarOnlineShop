import React from "react";
import { useQuery } from "react-query";
import { getSameProducts } from "../../../services/product";

function useSame(categoty) {
  return useQuery(["same-products", categoty], () => getSameProducts(categoty));
}

export default useSame;
