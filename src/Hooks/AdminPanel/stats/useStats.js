import { useQuery } from "react-query";
import { getStats } from "../../../services/static";

function useStatsNumbers() {
  return useQuery(["stats-number"], getStats);
}

export default useStatsNumbers;
