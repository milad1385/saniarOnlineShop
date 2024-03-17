import React from "react";
import { useQuery } from "react-query";
import { getAllTickets } from "../../../services/ticket";

function useGetAll() {
  return useQuery(["tickets"], getAllTickets);
}

export default useGetAll;
