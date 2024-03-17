import { useQuery } from "react-query";
import { getAllDepartments } from "../../../services/ticket";

function useTicket() {
  return useQuery(["departments"], getAllDepartments);
}

export default useTicket;
