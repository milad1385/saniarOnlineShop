import { useMutation, useQueryClient } from "react-query";
import { deleteSlider } from "../../../services/slider";

function useDeleteSlider() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteSlider,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sliders"] });
    },
  });
}

export default useDeleteSlider;
