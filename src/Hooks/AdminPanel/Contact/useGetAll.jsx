import { useQuery } from "react-query";
import { getAllContact } from "../../../services/contact";

function useGetAll() {
  return useQuery(["contacts"], getAllContact);
}

export default useGetAll;
