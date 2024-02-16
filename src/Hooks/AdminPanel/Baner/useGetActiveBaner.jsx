import React from "react";
import { useQuery } from "react-query";
import { getActiveBaner } from "../../../services/banerApi";

function useGetActiveBaner() {
  return useQuery(["activeBaner"], getActiveBaner);
}

export default useGetActiveBaner;
