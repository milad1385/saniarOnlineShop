import { useQuery } from "react-query";
import { getMainArticle } from "../../../services/article";

function useGetMain(articleName) {
  return useQuery(["article-info", articleName], () =>
    getMainArticle(articleName)
  );
}

export default useGetMain;
