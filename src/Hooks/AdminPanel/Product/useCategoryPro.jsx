import React from "react";
import { useMutation, useQuery } from "react-query";
import { getProductFromCategory } from "../../../services/product";

function useCategoryPro(page, catName) {
  return useQuery(["cat-product", page , catName], () => getProductFromCategory(catName , page));
}

export default useCategoryPro;
