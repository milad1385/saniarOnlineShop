import React from "react";
import { useQuery } from "react-query";
import { getMainOrderDetail } from "../../services/order";

function useMainOrder(id) {
  return useQuery(["main-order", id], () => getMainOrderDetail(id));
}

export default useMainOrder;
