import React from "react";
import { useQuery } from "react-query";
import { getLastUser } from "../../../services/userApi";

function useLastestUser(q) {
  return useQuery(["lastestUser", q], () => getLastUser(q));
}

export default useLastestUser;
