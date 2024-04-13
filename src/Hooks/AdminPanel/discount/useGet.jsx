import { useQuery } from "react-query";
import { getDiscountCode } from "../../../services/discount";
function useGet() {
  return useQuery(["discounts"], getDiscountCode);
}

export default useGet;
