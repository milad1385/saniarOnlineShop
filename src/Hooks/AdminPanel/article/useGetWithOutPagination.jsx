import { useQuery } from "react-query";
import { getArticlesWithOutPagination } from "../../../services/article";

function useGetWithOutPagination() {
  return useQuery(["article-list"], getArticlesWithOutPagination);
}

export default useGetWithOutPagination;
