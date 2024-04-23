import React from "react";
import { useQuery } from "react-query";
import { getOrders } from "../../services/order";

function useGetMain() {
  return useQuery(["orders"], getOrders);
}

export default useGetMain;
