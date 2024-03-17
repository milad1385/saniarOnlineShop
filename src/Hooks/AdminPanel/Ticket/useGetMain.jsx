import React from "react";
import { useQuery } from "react-query";
import { getMainInfo } from "../../../services/ticket";

function useGetMain(id) {
  return useQuery(["ticket-info", id], () => getMainInfo(id));
}

export default useGetMain;
