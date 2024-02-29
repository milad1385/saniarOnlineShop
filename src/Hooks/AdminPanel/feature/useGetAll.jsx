import React from "react";
import { useQuery } from "react-query";
import { getAllFeatures } from "../../../services/feature";

function useGetAll(page) {
  return useQuery(["features", page], () => getAllFeatures(page));
}

export default useGetAll;
