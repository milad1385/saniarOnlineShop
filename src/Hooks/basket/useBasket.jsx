import { useQuery } from "react-query";
import { getUserBasket } from "../../services/basket";

function useBasket() {
  return useQuery(["user-basket"], getUserBasket);
}

export default useBasket;
