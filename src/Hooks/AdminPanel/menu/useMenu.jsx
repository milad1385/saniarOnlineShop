import React from "react";
import { useQuery } from "react-query";
import { getNavbarMenu } from "../../../services/menu";
function useMenu() {
  return useQuery(["menu-list"], getNavbarMenu);
}

export default useMenu;
