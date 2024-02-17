import { useMutation, useQueryClient } from "react-query";
import { acceptOrDeclineSlider } from "../../../services/slider";

function useAcceptOrDecline() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: acceptOrDeclineSlider,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sliders"] });
    },
  });
}

export default useAcceptOrDecline;
