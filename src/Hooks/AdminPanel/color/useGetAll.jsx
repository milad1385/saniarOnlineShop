import { useQuery } from "react-query";
import { getAllColors } from "../../../services/color";

function useGetAll(page) {
  return useQuery(["color-list", page], () => getAllColors(page));
}

export default useGetAll;
