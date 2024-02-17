import React from "react";
import { useQuery } from "react-query";
import { getAllSliders } from "../../../services/slider";

function useGetAllSliders() {
  return useQuery(["sliders"], getAllSliders);
}

export default useGetAllSliders;
