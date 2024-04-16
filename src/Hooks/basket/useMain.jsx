import React from "react";
import { useQuery } from "react-query";
import { getMainBasket } from "../../services/basket";

function useMain(id) {
  return useQuery(["main-basket" , id], () => getMainBasket(id));
}

export default useMain;
