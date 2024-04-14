import React from "react";
import { useQuery } from "react-query";
import { getAllMenus } from "../../../services/menu";
function useGet() {
  return useQuery(["menus"], getAllMenus);
}

export default useGet;
