import React from "react";
import { getMainWishList } from "../../services/wish";
import { useQuery } from "react-query";
function useGetMain() {
  return useQuery(["wishlist"], getMainWishList);
}

export default useGetMain;
