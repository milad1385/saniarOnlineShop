import React from "react";
import { useQuery } from "react-query";
import { getLastUser } from "../../../services/userApi";

function useLastestUser() {
  return useQuery(["lastestUser"], getLastUser);
}

export default useLastestUser;
