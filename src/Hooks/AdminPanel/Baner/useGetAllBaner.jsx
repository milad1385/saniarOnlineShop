import { useQuery } from "react-query";
import { getBaners } from "../../../services/banerApi";

function useGetAllBaner() {
  return useQuery(["baners"], getBaners);
}

export default useGetAllBaner;
