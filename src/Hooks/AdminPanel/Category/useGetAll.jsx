import React from "react";
import { useQuery } from "react-query";
import { getAllCategory } from "../../../services/categoryApi";

function useGetAll(page) {
  return useQuery(["categories", page], () => getAllCategory(page));
}

export default useGetAll;
