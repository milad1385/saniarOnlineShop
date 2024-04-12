import React from "react";
import { useQuery } from "react-query";
import { getTicketAnswers } from "../../../services/ticket";
function useGetAnswers(id) {
  return useQuery(["ticket-answers", id], () => getTicketAnswers(id));
}

export default useGetAnswers;
