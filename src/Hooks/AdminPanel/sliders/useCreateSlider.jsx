import { useMutation, useQueryClient } from "react-query";
import { createNewSlider } from "../../../services/slider";

function useCreateSlider() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createNewSlider,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sliders"] });
    },
  });
}

export default useCreateSlider;
