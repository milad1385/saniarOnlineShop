import React from "react";
import { useQuery } from "react-query";
import { getFeatures } from "../../../services/product";

function useFeatures(id) {
    console.log(id);
  return useQuery(["main-feature", id], (id) => getFeatures(id));
}

export default useFeatures;
