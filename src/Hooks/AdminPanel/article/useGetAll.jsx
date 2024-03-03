import { useQuery } from "react-query";
import { getArticles } from "../../../services/article";

function useGetAll(page) {
  return useQuery(["articles", +page], () => getArticles(+page));
}

export default useGetAll;
