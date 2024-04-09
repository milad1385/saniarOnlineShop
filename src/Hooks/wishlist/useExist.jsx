import React from "react";
import { useQuery } from "react-query";
import { isExistProductWish } from "../../services/wish";
function useExist(id) {
  return useQuery(["isExist", id], () => isExistProductWish(id));
}

export default useExist;
