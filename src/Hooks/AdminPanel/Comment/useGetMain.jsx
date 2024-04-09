import React from "react";
import { useQuery } from "react-query";
import { getMainComments } from "../../../services/comment";

function useGetMain() {
  return useQuery(["comments"], getMainComments);
}

export default useGetMain;
