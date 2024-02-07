import React from "react";
import { useQuery } from "react-query";
import { getUserInfo } from "../../services/userApi";

function useGetMe(token) {
  return useQuery(["userInfo", token], () => getUserInfo(token));
}

export default useGetMe;
