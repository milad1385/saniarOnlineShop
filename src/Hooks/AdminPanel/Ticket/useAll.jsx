import React from "react";
import { useQuery } from "react-query";
import { fetchAllTickets } from "../../../services/ticket";

function useAll() {
  return useQuery(["allTickets"], fetchAllTickets);
}

export default useAll;
