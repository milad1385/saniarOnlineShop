import { useQuery } from "react-query";
import { getAllAds } from "../../../../services/static";

function useGetAll() {
  return useQuery(["ads"], getAllAds);
}

export default useGetAll;
