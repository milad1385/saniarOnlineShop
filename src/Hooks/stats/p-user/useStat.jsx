import React from "react";
import { useQuery } from "react-query";
import { getPanelInfo } from "../../../services/userApi";

function useStat() {
  return useQuery(["p-user-stats"], getPanelInfo);
}

export default useStat;
