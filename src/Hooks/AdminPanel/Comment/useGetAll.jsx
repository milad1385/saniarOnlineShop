import { useQuery } from "react-query";
import { getAllComments } from "../../../services/comment";

function useGetAll() {
  return useQuery(["comments"], getAllComments);
}

export default useGetAll;
