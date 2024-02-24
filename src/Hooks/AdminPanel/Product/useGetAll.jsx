import React from "react";
import { useQuery } from "react-query";
import { getAllProducts } from "../../../services/product";

function useGetAll(page) {
  return useQuery(["products", +page], () => getAllProducts(page));
}

export default useGetAll;
