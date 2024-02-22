import React from "react";
import { useQuery } from "react-query";
import { getAddresses } from "../../../../services/static";

function useGetAll() {
  return useQuery(["addresses"], getAddresses);
}

export default useGetAll;
