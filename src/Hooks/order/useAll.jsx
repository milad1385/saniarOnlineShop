import React from "react";
import { useQuery } from "react-query";
import { getAllOrders } from "../../services/order";

function useAll() {
  return useQuery(["all-orders"], getAllOrders);
}

export default useAll;
