import React from "react";
import { useQuery } from "react-query";
import { getActiveSlider } from "../../../services/slider";

function useGetActiveSlider() {
  return useQuery(["active-slider"], getActiveSlider);
}

export default useGetActiveSlider;
