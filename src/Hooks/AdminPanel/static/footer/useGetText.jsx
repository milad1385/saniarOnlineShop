import { useQuery } from "react-query";
import { getFooterText } from "../../../../services/static";

function useGetText() {
  return useQuery(["footer-text"], getFooterText);
}

export default useGetText;
